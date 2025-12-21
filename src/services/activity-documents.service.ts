import { Injectable } from '@nestjs/common';
import { ActivityDocuments } from 'src/@generated/activity-documents/activity-documents.model';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { ActivityDocumentsRepository } from 'src/repositories/activity-documents.repository';
import { GoogleDriveService } from './google-drive.service';
import { PrismaService } from './prisma.service';
import { Readable } from 'stream';

export interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Readable;
}

export interface UploadDocumentInput {
  activity_id: string;
  project_activity_id: string;
  type: string;
}

export interface DownloadResult {
  buffer: Buffer;
  filename: string;
  mimeType: string;
}

@Injectable()
export class ActivityDocumentsService {
  constructor(
    private readonly repository: ActivityDocumentsRepository,
    private readonly driveService: GoogleDriveService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Upload de documento de atividade
   */
  async uploadDocument(
    input: UploadDocumentInput,
    file: FileUpload,
    userId: string,
  ): Promise<ActivityDocuments> {
    let driveFileId: string | null = null;

    try {
      // 1. Validar arquivo
      this.validateFile(file);

      // 2. Buscar atividade com hierarquia completa (institution, department, project)
      const activity = await this.prisma.projectActivity.findUnique({
        where: { id: input.project_activity_id, is_deleted: false },
        include: {
          project: {
            include: {
              department: {
                include: {
                  institution: true,
                },
              },
              Institution: true, // Para projetos que têm institution_id direta
            },
          },
        },
      });

      if (!activity) {
        throw new CustomGraphQLError('Atividade não encontrada', ErrorCode.NOT_FOUND, 404);
      }

      // 3. Extrair dados da hierarquia
      const projectTitle = activity.project.title;
      const activityName = activity.name;

      // Department pode vir da relação direta do projeto
      const department = activity.project.department;
      const departmentId = department?.id;
      const departmentName = department?.name;

      // Institution pode vir de duas fontes:
      // 1. Relação direta do projeto (institution_id)
      // 2. Através do department (department.institution_id)
      const institution = activity.project.Institution || department?.institution;
      const institutionId = institution?.id;
      const institutionName = institution?.name;

      // 4. Criar folder da atividade (cria hierarquia completa automaticamente)
      const activityFolder = await this.driveService.createOrGetActivityFolder(
        activity.project_id,
        projectTitle,
        activity.id,
        activityName,
        departmentId,
        departmentName,
        institutionId,
        institutionName,
      );

      // 5. Converter stream para buffer
      const { createReadStream, filename, mimetype } = file;
      const stream = createReadStream();
      const buffer = await this.streamToBuffer(stream);

      // 6. Upload para Google Drive
      driveFileId = await this.driveService.uploadFile(buffer, filename, mimetype, activityFolder);

      // 7. Verificar se usuário tem permission de validação para auto-validar
      const isAutoValidated = await this.userHasPermission(userId, 'validateActivityDocument');

      // 8. Criar registro no banco
      const document = await this.repository.create(
        {
          activity_id: input.activity_id,
          project_activity_id: input.project_activity_id,
          file_url: `https://drive.google.com/file/d/${driveFileId}/view`,
          drive_file_id: driveFileId,
          filename,  // Nome original do arquivo
          type: input.type,
          uploaded_by: userId,
          is_validated: isAutoValidated,
          validated_at: isAutoValidated ? new Date() : null,
        },
        userId,
      );

      return document;
    } catch (error) {
      // Log do erro original para debugging
      console.error('Upload document error:', error);

      // Rollback: Deletar do Drive se a operação no banco falhou
      if (driveFileId) {
        try {
          await this.driveService.deleteFile(driveFileId);
        } catch (deleteError) {
          console.error('Failed to rollback Drive file:', deleteError);
        }
      }

      // Re-lançar erro original
      if (error instanceof CustomGraphQLError) {
        throw error;
      }

      throw new CustomGraphQLError(
        `Erro ao fazer upload de documento: ${error.message || 'Erro desconhecido'}`,
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Download de documento (proxy seguro)
   */
  async downloadDocument(id: string, userId: string): Promise<DownloadResult> {
    // 1. Buscar documento
    const document = await this.repository.findById(id);

    if (!document) {
      throw new CustomGraphQLError('Documento não encontrado', ErrorCode.NOT_FOUND, 404);
    }

    if (!document.project_activity_id) {
      throw new CustomGraphQLError('Atividade não associada ao documento', ErrorCode.BAD_REQUEST, 400);
    }

    // 2. Buscar atividade relacionada com projeto e voluntários
    const activity = await this.prisma.projectActivity.findFirst({
      where: {
        id: document.project_activity_id,
        is_deleted: false,
      },
      include: {
        project: {
          include: {
            voluntary_users: {
              where: { user_id: userId, is_deleted: false },
            },
            owner: true,
          },
        },
        owner: true,
      },
    });

    if (!activity) {
      throw new CustomGraphQLError('Atividade não encontrada', ErrorCode.NOT_FOUND, 404);
    }

    // 3. Verificar permissão do usuário
    const hasAccess = await this.checkUserCanAccessActivity(userId, activity);

    if (!hasAccess) {
      throw new CustomGraphQLError(
        'Você não tem permissão para acessar este documento',
        ErrorCode.FORBIDDEN,
        403,
      );
    }

    // 4. Baixar arquivo do Drive
    if (!document.drive_file_id) {
      throw new CustomGraphQLError(
        'ID do arquivo no Drive não encontrado',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }

    const buffer = await this.driveService.downloadFile(document.drive_file_id);
    const metadata = await this.driveService.getFileMetadata(document.drive_file_id);

    return {
      buffer,
      filename: metadata.name || 'download',
      mimeType: metadata.mimeType || 'application/octet-stream',
    };
  }

  /**
   * Deletar documento
   */
  async deleteDocument(id: string, userId: string): Promise<ActivityDocuments> {
    // 1. Buscar documento
    const document = await this.repository.findById(id);

    if (!document) {
      throw new CustomGraphQLError('Documento não encontrado', ErrorCode.NOT_FOUND, 404);
    }

    try {
      // 2. Soft delete no banco
      const deletedDocument = await this.repository.softDelete(id, userId);

      // 3. Deletar do Drive
      if (document.drive_file_id) {
        await this.driveService.deleteFile(document.drive_file_id);
      }

      return deletedDocument;
    } catch (error) {
      // Em caso de erro no Drive, manter o soft delete no banco
      // mas logar o erro
      console.error('Erro ao deletar arquivo do Drive:', error);

      throw new CustomGraphQLError(
        'Erro ao deletar documento',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }

  /**
   * Validar documento
   * Nota: Verificação de permission é feita pelo PermissionsGuard via decorator @Permission('validateActivityDocument')
   */
  async validateDocument(id: string, userId: string): Promise<ActivityDocuments> {
    // 1. Buscar documento
    const document = await this.repository.findById(id);

    if (!document) {
      throw new CustomGraphQLError('Documento não encontrado', ErrorCode.NOT_FOUND, 404);
    }

    // 3. Validar documento
    return this.repository.validateDocument(id, userId);
  }

  /**
   * Listar documentos de uma atividade
   */
  async getDocumentsByActivity(activityId: string): Promise<ActivityDocuments[]> {
    return this.repository.findByActivityId(activityId);
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
   * Verificar se usuário pode acessar atividade
   */
  private async checkUserCanAccessActivity(userId: string, activity: any): Promise<boolean> {
    // User é owner da atividade
    if (activity.owner_id === userId) {
      return true;
    }

    // User é owner do projeto
    if (activity.project?.owner_id === userId) {
      return true;
    }

    // User é voluntário do projeto
    if (activity.project?.voluntary_users && activity.project.voluntary_users.length > 0) {
      return true;
    }

    // Verificação adicional de roles será feita no resolver
    // aqui apenas verificamos ownership/membership diretos
    return false;
  }
}
