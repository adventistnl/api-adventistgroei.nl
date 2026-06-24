import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { SubsidyReceipt } from 'src/@generated/subsidy-receipt/subsidy-receipt.model';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { SubsidyReceiptRepository } from 'src/repositories/subsidy-receipt.repository';
import { GoogleDriveService } from './google-drive.service';
import { PrismaService } from './prisma.service';
import { FileUpload, DownloadResult } from './activity-documents.service';
import { Readable } from 'stream';
import { SubsidyRequestService } from './subsidy-request.service';
import { SubsidyStatusHistoryRepository } from 'src/repositories/subsidy-status-history.repository';
import { ProjectHistoryService } from './project-history.service';
import { ProjectHistoryType } from 'src/@generated/prisma/project-history-type.enum';
import { SubsidyHistoryType } from 'src/@generated/prisma/subsidy-history-type.enum';

export interface UploadSubsidyReceiptInput {
  subsidy_request_id: string;
  subsidy_request_item_id?: string;
  project_activity_id?: string;
  is_refund_receipt?: boolean;
  type: string;
  amount?: number;
  note?: string;
}

@Injectable()
export class SubsidyReceiptService {
  constructor(
    private readonly repository: SubsidyReceiptRepository,
    private readonly driveService: GoogleDriveService,
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => SubsidyRequestService))
    private readonly subsidyRequestService: SubsidyRequestService,
    private readonly historyRepository: SubsidyStatusHistoryRepository,
    @Inject(forwardRef(() => ProjectHistoryService))
    private readonly projectHistoryService: ProjectHistoryService,
  ) {}

  private ensureNotClosed(statusName: string | undefined) {
    if (statusName?.toUpperCase() === 'CLOSED') {
      throw new CustomGraphQLError(
        'Action not allowed on a CLOSED subsidy request',
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'STATUS_IS_CLOSED' } }
      );
    }
  }


  /**
   * Upload subsidy receipt
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
          subsidy_status: true,
        },
      });

      if (!subsidyRequest) {
        throw new CustomGraphQLError('Subsidy request not found', ErrorCode.NOT_FOUND, 404);
      }

      this.ensureNotClosed(subsidyRequest.subsidy_status?.name);

      // Todos os tipos de subsídio aceitam comprovantes — cada pedido precisa ter seus valores comprovados
      // (WITH_DOCUMENT, WITHOUT_DOCUMENT e ADVANCE podem ter múltiplos recibos vinculados)

      // 3. Buscar e validar atividade relacionada (opcional — dispensada para comprovantes de reembolso)
      if (input.project_activity_id) {
        const activity = await this.prisma.projectActivity.findUnique({
          where: { id: input.project_activity_id, is_deleted: false },
        });

        if (!activity) {
          throw new CustomGraphQLError('Activity not found', ErrorCode.NOT_FOUND, 404);
        }
      }

      // 4. Extrair dados da hierarquia
      const projectTitle = subsidyRequest.project.title;

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
          is_refund_receipt: input.is_refund_receipt ?? false,
          file_url: `https://drive.google.com/file/d/${driveFileId}/view`,
          drive_file_id: driveFileId,
          filename,
          type: input.type,
          amount: input.amount,
          note: input.note,
          uploaded_by: userId,
          is_validated: false, // Sempre começa como não validado
          validated_at: null,
        },
        userId,
      );

      // 9. Create history record for document upload
      await this.historyRepository.create({
        subsidy_request_id: input.subsidy_request_id,
        status_id: subsidyRequest.subsidy_statuses_id,
        previous_status_id: undefined,
        type: SubsidyHistoryType.DOCUMENT_ACTION,
        reason: `Document "${filename}" uploaded`,
        changed_by: userId,
      });

      // 10. Log no histórico global do projeto para notificar a equipe
      await this.projectHistoryService.logEvent(
        subsidyRequest.project_id,
        userId,
        ProjectHistoryType.SUBSIDY_DOCUMENT_UPDATED,
        {
          metadata: { targetId: subsidyRequest.id },
        }
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
        throw new CustomGraphQLError('Receipt not found', ErrorCode.NOT_FOUND, 404);
    }

    // Verificar permissão de acesso
    const hasAccess = await this.checkUserCanAccessSubsidy(userId, receipt.subsidy_request_id);
    if (!hasAccess) {
      throw new CustomGraphQLError(
        'You do not have permission to access this receipt',
        ErrorCode.FORBIDDEN,
        403,
      );
    }

    if (!receipt.drive_file_id) {
      throw new CustomGraphQLError(
        'Drive file ID not found',
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
      throw new CustomGraphQLError('Receipt not found', ErrorCode.NOT_FOUND, 404);
    }

    if (receipt.subsidy_request_id) {
        const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
            where: { id: receipt.subsidy_request_id },
            include: { subsidy_status: true }
        });
        if (subsidyRequest) {
            this.ensureNotClosed(subsidyRequest.subsidy_status?.name);
        }
    }

    try {
      // Create history record BEFORE deletion (if subsidy_request_id exists)
      if (receipt.subsidy_request_id) {
        const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
          where: { id: receipt.subsidy_request_id }
        });
        
        if (subsidyRequest?.subsidy_statuses_id) {
          await this.historyRepository.create({
            subsidy_request_id: receipt.subsidy_request_id,
            status_id: subsidyRequest.subsidy_statuses_id,
            previous_status_id: undefined,
            type: SubsidyHistoryType.DOCUMENT_ACTION,
            reason: `Document "${receipt.filename}" removed`,
            changed_by: userId,
          });
        }
      }

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
  async validateReceipt(id: string, userId: string, note?: string): Promise<SubsidyReceipt> {
    const receipt = await this.repository.findById(id);

    if (!receipt) {
      throw new CustomGraphQLError('Receipt not found', ErrorCode.NOT_FOUND, 404);
    }

    if (receipt.subsidy_request_id) {
        const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
            where: { id: receipt.subsidy_request_id },
            include: { subsidy_status: true }
        });
        if (subsidyRequest) {
            this.ensureNotClosed(subsidyRequest.subsidy_status?.name);
        }
    }

    const updatedReceipt = await this.repository.validateReceipt(id, userId, note);

    // Check for subsidy_request_id
    if (!updatedReceipt.subsidy_request_id) {
      console.warn(`Receipt ${id} has no subsidy_request_id. Skipping history log.`);
      return updatedReceipt;
    }

    // Fetch parent request to ensure data for history
    const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
      where: { id: updatedReceipt.subsidy_request_id }
    });

    if (subsidyRequest && subsidyRequest.subsidy_statuses_id) {
      // Create history log for validation
      await this.historyRepository.create({
        subsidy_request_id: subsidyRequest.id,
        status_id: subsidyRequest.subsidy_statuses_id,
        previous_status_id: undefined,
        type: SubsidyHistoryType.DOCUMENT_ACTION,
        reason: `Document "${receipt.filename}" validated`,
        changed_by: userId,
      });

      // Log no histórico global do projeto para notificar a equipe
      await this.projectHistoryService.logEvent(
        subsidyRequest.project_id,
        userId,
        ProjectHistoryType.SUBSIDY_DOCUMENT_VALIDATED,
        {
          metadata: { targetId: subsidyRequest.id },
        }
      );

      await this.subsidyRequestService.recalculateStatus(subsidyRequest.id, userId);
    }

    return updatedReceipt;
  }

  /**
   * Rejeitar recibo
   */
  async rejectReceipt(id: string, userId: string, reason?: string): Promise<SubsidyReceipt> {
    const receipt = await this.repository.findById(id);

    if (!receipt) {
      throw new CustomGraphQLError('Receipt not found', ErrorCode.NOT_FOUND, 404);
    }

    if (receipt.subsidy_request_id) {
        const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
            where: { id: receipt.subsidy_request_id },
            include: { subsidy_status: true }
        });
        if (subsidyRequest) {
            this.ensureNotClosed(subsidyRequest.subsidy_status?.name);
        }
    }

    const updatedReceipt = await this.repository.rejectReceipt(id, userId, reason);

    // Check for subsidy_request_id
    if (!updatedReceipt.subsidy_request_id) {
      console.warn(`Receipt ${id} has no subsidy_request_id. Skipping history log.`);
      return updatedReceipt;
    }

    // Fetch parent request to ensure data for history
    const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
      where: { id: updatedReceipt.subsidy_request_id }
    });

    if (subsidyRequest && subsidyRequest.subsidy_statuses_id) {
      // Create history log for rejection
      await this.historyRepository.create({
        subsidy_request_id: subsidyRequest.id,
        status_id: subsidyRequest.subsidy_statuses_id,
        previous_status_id: undefined,
        type: SubsidyHistoryType.DOCUMENT_ACTION,
        reason: `Document "${receipt.filename}" rejected. Reason: ${reason || 'No reason specified'}`,
        changed_by: userId,
      });

      // Log no histórico global do projeto para notificar a equipe
      await this.projectHistoryService.logEvent(
        subsidyRequest.project_id,
        userId,
        ProjectHistoryType.SUBSIDY_DOCUMENT_REJECTED,
        {
          metadata: { targetId: subsidyRequest.id },
        }
      );

      await this.subsidyRequestService.recalculateStatus(subsidyRequest.id, userId);
    }

    return updatedReceipt;
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
        'Invalid file type. Only JPG, PNG and PDF are allowed.',
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
          'File too large. Maximum size: 10MB',
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

  /**
   * Obter o folder ID do Google Drive para uma solicitação de subsídio
   * Busca através dos receipts existentes
   */
  async getSubsidyFolderId(subsidyRequestId: string): Promise<string | null> {
    try {
      // Buscar um receipt deste subsidy request que tenha drive_file_id
      const receipt = await this.prisma.subsidyReceipt.findFirst({
        where: {
          subsidy_request_id: subsidyRequestId,
          is_deleted: false,
          drive_file_id: { not: null },
        },
      });

      if (!receipt || !receipt.drive_file_id) {
        console.log(`No receipts with drive_file_id found for subsidy ${subsidyRequestId}`);
        return null;
      }

      // Obter metadados do arquivo para encontrar o parent folder
      const fileMetadata = await this.driveService.getFileMetadata(receipt.drive_file_id);
      
      // O parent do arquivo é a pasta do subsídio
      if (fileMetadata.parents && fileMetadata.parents.length > 0) {
        return fileMetadata.parents[0];
      }

      console.log(`No parent folder found for file ${receipt.drive_file_id}`);
      return null;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error getting subsidy folder ID: ${message}`);
      return null;
    }
  }

  /**
   * Create a receipt from an existing Activity Document
   */
  async createFromActivityDocument(
    userId: string,
    subsidyRequestId: string,
    activityDocumentId: string,
    activityId: string,
    subsidyRequestItemId?: string,
    amount?: number
  ): Promise<SubsidyReceipt> {
    
    // 1. Find the activity document
    const activityDoc = await this.prisma.activityDocuments.findUnique({
      where: { id: activityDocumentId },
    });

    if (!activityDoc) {
      throw new CustomGraphQLError('Activity document not found', ErrorCode.NOT_FOUND, 404);
    }

    // 2. Find the subsidy request to validate permission and status
    const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
      where: { id: subsidyRequestId },
      include: { subsidy_status: true }
    });

    if (!subsidyRequest) {
      throw new CustomGraphQLError('Subsidy request not found', ErrorCode.NOT_FOUND, 404);
    }

    this.ensureNotClosed(subsidyRequest.subsidy_status?.name);

    // 3. Create the Subsidy Receipt pointing to the same Drive File
    const receipt = await this.repository.create(
      {
        subsidy_request_id: subsidyRequestId,
        subsidy_request_item_id: subsidyRequestItemId,
        project_activities_id: activityId,
        file_url: activityDoc.file_url || '',
        drive_file_id: activityDoc.drive_file_id || '',
        filename: activityDoc.filename,
        type: activityDoc.type,
        uploaded_by: userId,
        amount: amount || 0, 
        is_validated: false,
        validated_at: null,
      },
      userId,
    );

     // 4. Create history record
     await this.historyRepository.create({
      subsidy_request_id: subsidyRequestId,
      status_id: subsidyRequest.subsidy_statuses_id,
      previous_status_id: undefined,
      type: SubsidyHistoryType.DOCUMENT_ACTION,
      reason: `Document "${activityDoc.filename}" imported from activity`,
      changed_by: userId,
    });

    return receipt;
  }
}
