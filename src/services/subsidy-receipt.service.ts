import { Injectable } from '@nestjs/common';
import { SubsidyReceipt } from 'src/@generated/subsidy-receipt/subsidy-receipt.model';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { SubsidyReceiptRepository } from 'src/repositories/subsidy-receipt.repository';
import { GoogleDriveService } from './google-drive.service';
import { PrismaService } from './prisma.service';
import { FileUpload, DownloadResult } from './activity-documents.service';
import { Readable } from 'stream';

export interface UploadSubsidyReceiptInput {
  subsidy_request_id: string;
  subsidy_request_item_id?: string;
  project_activity_id: string;
  type: string;
  amount?: number;
}

@Injectable()
export class SubsidyReceiptService {
  constructor(
    private readonly repository: SubsidyReceiptRepository,
    private readonly driveService: GoogleDriveService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Upload de recibo de subsídio
   */
  async uploadReceipt(
    input: UploadSubsidyReceiptInput,
    file: FileUpload,
    userId: string,
  ): Promise<SubsidyReceipt> {
    let driveFileId: string | null = null;

    try {
      // 1. Validar arquivo
      this.validateFile(file);

      // 2. Buscar subsidy request com hierarquia completa
      const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
        where: { id: input.subsidy_request_id, is_deleted: false },
        include: {
          project: {
            include: {
              department: {
                include: {
                  institution: true,
                },
              },
              Institution: true,
            },
          },
          institution: true,
          department: {
            include: {
              institution: true,
            },
          },
        },
      });

      if (!subsidyRequest) {
        throw new CustomGraphQLError('Solicitação de subsídio não encontrada', ErrorCode.NOT_FOUND, 404);
      }

      // 3. Buscar atividade relacionada
      const activity = await this.prisma.projectActivity.findUnique({
        where: { id: input.project_activity_id, is_deleted: false },
      });

      if (!activity) {
        throw new CustomGraphQLError('Atividade não encontrada', ErrorCode.NOT_FOUND, 404);
      }

      // 4. Extrair dados da hierarquia
      const projectTitle = subsidyRequest.project.title;
      const activityName = activity.name;

      // Department pode vir da relação direta do projeto ou do subsidy request
      const department = subsidyRequest.department || subsidyRequest.project.department;
      const departmentId = department?.id;
      const departmentName = department?.name;

      // Institution pode vir de várias fontes
      const institution = subsidyRequest.institution || subsidyRequest.project.Institution || department?.institution;
      const institutionId = institution?.id;
      const institutionName = institution?.name;

      console.log('📁 [SubsidyReceipt] Creating folder structure:', {
        projectId: subsidyRequest.project_id,
        projectTitle,
        subsidyRequestId: subsidyRequest.id,
        departmentId,
        departmentName,
        institutionId,
        institutionName,
      });

      // 5. Criar folder do subsídio (reutiliza folder da atividade ou cria um específico para subsídios)
      // Estrutura: Institution > Department > Project > Subsidies > SubsidyRequest
      const subsidyFolder = await this.createOrGetSubsidyFolder(
        subsidyRequest.project_id,
        projectTitle,
        subsidyRequest.id,
        departmentId,
        departmentName,
        institutionId,
        institutionName,
      );

      console.log('✅ [SubsidyReceipt] Folder created:', subsidyFolder);

      // 6. Converter stream para buffer
      const { createReadStream, filename, mimetype } = file;
      const stream = createReadStream();
      const buffer = await this.streamToBuffer(stream);

      // 7. Upload para Google Drive
      driveFileId = await this.driveService.uploadFile(buffer, filename, mimetype, subsidyFolder);

      // 8. Criar registro no banco (sempre começa como não validado)
      const receipt = await this.repository.create(
        {
          subsidy_request_id: input.subsidy_request_id,
          subsidy_request_item_id: input.subsidy_request_item_id,
          project_activities_id: input.project_activity_id,
          file_url: `https://drive.google.com/file/d/${driveFileId}/view`,
          drive_file_id: driveFileId,
          filename,
          type: input.type,
          amount: input.amount,
          uploaded_by: userId,
          is_validated: false, // Sempre começa como não validado
          validated_at: null,
        },
        userId,
      );

      return receipt;
    } catch (error) {
      console.error('Upload subsidy receipt error:', error);

      // Rollback: Deletar do Drive se a operação no banco falhou
      if (driveFileId) {
        try {
          await this.driveService.deleteFile(driveFileId);
        } catch (deleteError) {
          console.error('Failed to rollback Drive file:', deleteError);
        }
      }

      if (error instanceof CustomGraphQLError) {
        throw error;
      }

      throw new CustomGraphQLError(
        `Erro ao fazer upload de recibo: ${error.message || 'Erro desconhecido'}`,
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Download de recibo (proxy seguro)
   */
  async downloadReceipt(id: string, userId: string): Promise<DownloadResult> {
    const receipt = await this.repository.findById(id);

    if (!receipt) {
      throw new CustomGraphQLError('Recibo não encontrado', ErrorCode.NOT_FOUND, 404);
    }

    // Verificar permissão de acesso
    const hasAccess = await this.checkUserCanAccessSubsidy(userId, receipt.subsidy_request_id);
    if (!hasAccess) {
      throw new CustomGraphQLError(
        'Você não tem permissão para acessar este recibo',
        ErrorCode.FORBIDDEN,
        403,
      );
    }

    if (!receipt.drive_file_id) {
      throw new CustomGraphQLError(
        'ID do arquivo no Drive não encontrado',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }

    const buffer = await this.driveService.downloadFile(receipt.drive_file_id);
    const metadata = await this.driveService.getFileMetadata(receipt.drive_file_id);

    return {
      buffer,
      filename: metadata.name || 'download',
      mimeType: metadata.mimeType || 'application/octet-stream',
    };
  }

  /**
   * Deletar recibo
   */
  async deleteReceipt(id: string, userId: string): Promise<SubsidyReceipt> {
    const receipt = await this.repository.findById(id);

    if (!receipt) {
      throw new CustomGraphQLError('Recibo não encontrado', ErrorCode.NOT_FOUND, 404);
    }

    try {
      // Soft delete no banco
      const deletedReceipt = await this.repository.softDelete(id, userId);

      // Deletar do Drive
      if (receipt.drive_file_id) {
        await this.driveService.deleteFile(receipt.drive_file_id);
      }

      return deletedReceipt;
    } catch (error) {
      console.error('Erro ao deletar recibo do Drive:', error);

      throw new CustomGraphQLError(
        'Erro ao deletar recibo',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Validar recibo
   */
  async validateReceipt(id: string, userId: string): Promise<SubsidyReceipt> {
    const receipt = await this.repository.findById(id);

    if (!receipt) {
      throw new CustomGraphQLError('Recibo não encontrado', ErrorCode.NOT_FOUND, 404);
    }

    return this.repository.validateReceipt(id, userId);
  }

  /**
   * Rejeitar recibo
   */
  async rejectReceipt(id: string, userId: string, reason?: string): Promise<SubsidyReceipt> {
    const receipt = await this.repository.findById(id);

    if (!receipt) {
      throw new CustomGraphQLError('Recibo não encontrado', ErrorCode.NOT_FOUND, 404);
    }

    return this.repository.rejectReceipt(id, userId, reason);
  }

  /**
   * Listar recibos de uma solicitação de subsídio
   */
  async getReceiptsBySubsidyRequest(subsidyRequestId: string): Promise<SubsidyReceipt[]> {
    return this.repository.findBySubsidyRequestId(subsidyRequestId);
  }

  /**
   * Listar recibos de um item de solicitação de subsídio
   */
  async getReceiptsBySubsidyRequestItem(subsidyRequestItemId: string): Promise<SubsidyReceipt[]> {
    return this.repository.findBySubsidyRequestItemId(subsidyRequestItemId);
  }

  /**
   * Listar recibos de uma atividade
   */
  async getReceiptsByActivity(activityId: string): Promise<SubsidyReceipt[]> {
    return this.repository.findByActivityId(activityId);
  }

  /**
   * Criar ou obter folder de subsídios no Google Drive
   */
  private async createOrGetSubsidyFolder(
    projectId: string,
    projectTitle: string,
    subsidyRequestId: string,
    departmentId?: string,
    departmentName?: string,
    institutionId?: string,
    institutionName?: string,
  ): Promise<string> {
    console.log('📁 [createOrGetSubsidyFolder] Starting folder creation...');
    
    // Primeiro, criar/obter folder do projeto
    console.log('📁 [createOrGetSubsidyFolder] Step 1: Creating project folder');
    const projectFolderId = await this.driveService.createOrGetProjectFolder(
      projectId,
      projectTitle,
      departmentId,
      departmentName,
      institutionId,
      institutionName,
    );
    console.log('✅ [createOrGetSubsidyFolder] Project folder ID:', projectFolderId);

    // Criar subfolder "Subsidios" dentro do projeto
    console.log('📁 [createOrGetSubsidyFolder] Step 2: Creating Subsidios folder');
    const subsidiesFolderName = 'Subsidios';
    const subsidiesFolderId = await this.driveService.findOrCreateFolder(
      subsidiesFolderName,
      projectFolderId,
    );
    console.log('✅ [createOrGetSubsidyFolder] Subsidios folder ID:', subsidiesFolderId);

    // Criar subfolder específico para esta solicitação de subsídio
    console.log('📁 [createOrGetSubsidyFolder] Step 3: Creating subsidy-specific folder');
    const subsidyFolderName = `subsidy-${subsidyRequestId.substring(0, 8)}`;
    const subsidyFolderId = await this.driveService.findOrCreateFolder(
      subsidyFolderName,
      subsidiesFolderId,
    );
    console.log('✅ [createOrGetSubsidyFolder] Final subsidy folder ID:', subsidyFolderId);

    return subsidyFolderId;
  }

  /**
   * Validar tipo e tamanho do arquivo
   */
  private validateFile(file: FileUpload): void {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];

    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new CustomGraphQLError(
        'Tipo de arquivo inválido. Apenas JPG, PNG e PDF são permitidos.',
        ErrorCode.BAD_REQUEST,
        400,
      );
    }
  }

  /**
   * Converter stream para buffer com validação de tamanho
   */
  private async streamToBuffer(stream: Readable): Promise<Buffer> {
    const chunks: Buffer[] = [];
    const maxSize = 10 * 1024 * 1024; // 10MB
    let totalSize = 0;

    for await (const chunk of stream) {
      totalSize += chunk.length;

      if (totalSize > maxSize) {
        throw new CustomGraphQLError(
          'Arquivo muito grande. Tamanho máximo: 10MB',
          ErrorCode.BAD_REQUEST,
          400,
        );
      }

      chunks.push(chunk);
    }

    return Buffer.concat(chunks);
  }

  /**
   * Verificar se usuário tem uma permission específica
   */
  private async userHasPermission(
    userId: string,
    permissionResolverName: string,
  ): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        user_roles: {
          where: { is_deleted: false },
          include: {
            role: {
              include: {
                role_permissions: {
                  where: { is_deleted: false },
                  include: { permission: true },
                },
              },
            },
          },
        },
      },
    });

    if (!user) return false;

    const userPermissions = user.user_roles
      .flatMap((ur) => ur.role.role_permissions)
      .map((rp) => rp.permission.resolver_name);

    return userPermissions.includes(permissionResolverName as any);
  }

  /**
   * Verificar se usuário pode acessar subsídio
   */
  private async checkUserCanAccessSubsidy(userId: string, subsidyRequestId: string | null): Promise<boolean> {
    if (!subsidyRequestId) return false;

    const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
      where: { id: subsidyRequestId },
      include: {
        project: {
          include: {
            voluntary_users: {
              where: { user_id: userId, is_deleted: false },
            },
            owner: true,
          },
        },
        requester: true,
      },
    });

    if (!subsidyRequest) return false;

    // User é o requester do subsídio
    if (subsidyRequest.requester_id === userId) {
      return true;
    }

    // User é owner do projeto
    if (subsidyRequest.project?.owner_id === userId) {
      return true;
    }

    // User é voluntário do projeto
    if (subsidyRequest.project?.voluntary_users && subsidyRequest.project.voluntary_users.length > 0) {
      return true;
    }

    return false;
  }
}
