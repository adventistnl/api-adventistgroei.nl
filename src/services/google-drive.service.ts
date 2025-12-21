import { Injectable } from '@nestjs/common';
import { google, drive_v3 } from 'googleapis';
import { Readable } from 'stream';

@Injectable()
export class GoogleDriveService {
  private drive: drive_v3.Drive;
  private folderCache: Map<string, string>;
  private rootFolderId: string;

  constructor() {
    const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH;
    const rootFolder = process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID;

    if (!keyPath || !rootFolder) {
      throw new Error(
        'Google Drive configuration missing. Please set GOOGLE_SERVICE_ACCOUNT_KEY_PATH and GOOGLE_DRIVE_ROOT_FOLDER_ID in .env',
      );
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/drive'],
    });

    this.drive = google.drive({ version: 'v3', auth });
    this.folderCache = new Map();
    this.rootFolderId = rootFolder;

    console.log(`Google Drive initialized for Shared Drive: ${rootFolder}`);
  }

  /**
   * Sanitiza nome para uso em pasta do Google Drive
   * Formato: remove caracteres especiais, substitui espaços por underscores, lowercase
   */
  private sanitizeFolderName(name: string): string {
    return name
      .toLowerCase()
      .normalize('NFD') // Normaliza caracteres acentuados
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .trim()
      .replace(/\s+/g, '_') // Substitui espaços por underscores
      .replace(/-+/g, '-') // Remove hífens duplicados
      .replace(/_+/g, '_') // Remove underscores duplicados
      .substring(0, 100); // Limita tamanho
  }

  /**
   * Cria ou obtém a pasta de uma instituição
   */
  async createOrGetInstitutionFolder(
    institutionId: string,
    institutionName: string,
  ): Promise<string> {
    const sanitizedName = this.sanitizeFolderName(institutionName);
    const folderName = `institution-${sanitizedName}-${institutionId}`;
    const cacheKey = `institution-${institutionId}`;

    // Verificar cache
    if (this.folderCache.has(cacheKey)) {
      return this.folderCache.get(cacheKey)!;
    }

    // Buscar ou criar pasta
    const folderId = await this.findOrCreateFolder(folderName, this.rootFolderId);

    // Armazenar em cache
    this.folderCache.set(cacheKey, folderId);

    return folderId;
  }

  /**
   * Cria ou obtém a pasta de um departamento dentro da pasta da instituição
   */
  async createOrGetDepartmentFolder(
    institutionId: string,
    institutionName: string,
    departmentId: string,
    departmentName: string,
  ): Promise<string> {
    const sanitizedName = this.sanitizeFolderName(departmentName);
    const folderName = `department-${sanitizedName}-${departmentId}`;
    const cacheKey = `department-${departmentId}`;

    // Verificar cache
    if (this.folderCache.has(cacheKey)) {
      return this.folderCache.get(cacheKey)!;
    }

    // Obter pasta da instituição primeiro
    const institutionFolderId = await this.createOrGetInstitutionFolder(
      institutionId,
      institutionName,
    );

    // Buscar ou criar pasta do departamento
    const folderId = await this.findOrCreateFolder(folderName, institutionFolderId);

    // Armazenar em cache
    this.folderCache.set(cacheKey, folderId);

    return folderId;
  }

  /**
   * Cria ou obtém a pasta de um projeto
   * Se tiver departamento, cria dentro dele. Senão, na raiz ou em 'Uncategorized'.
   */
  async createOrGetProjectFolder(
    projectId: string,
    projectTitle: string,
    departmentId?: string,
    departmentName?: string,
    institutionId?: string,
    institutionName?: string,
  ): Promise<string> {
    const sanitizedName = this.sanitizeFolderName(projectTitle);
    const folderName = `project-${sanitizedName}-${projectId}`;
    const cacheKey = `project-${projectId}`;

    // Verificar cache
    if (this.folderCache.has(cacheKey)) {
      return this.folderCache.get(cacheKey)!;
    }

    let parentFolderId: string;

    if (departmentId && departmentName && institutionId && institutionName) {
      // Projeto com hierarquia completa: institution > department > project
      parentFolderId = await this.createOrGetDepartmentFolder(
        institutionId,
        institutionName,
        departmentId,
        departmentName,
      );
    } else if (institutionId && institutionName) {
      // Projeto com instituição mas sem departamento
      parentFolderId = await this.createOrGetInstitutionFolder(institutionId, institutionName);
    } else {
      // Projeto sem instituição: criar em pasta "Uncategorized"
      const uncategorizedKey = 'uncategorized-folder';
      if (this.folderCache.has(uncategorizedKey)) {
        parentFolderId = this.folderCache.get(uncategorizedKey)!;
      } else {
        parentFolderId = await this.findOrCreateFolder('Uncategorized', this.rootFolderId);
        this.folderCache.set(uncategorizedKey, parentFolderId);
      }
    }

    // Buscar ou criar pasta do projeto
    const folderId = await this.findOrCreateFolder(folderName, parentFolderId);

    // Armazenar em cache
    this.folderCache.set(cacheKey, folderId);

    return folderId;
  }

  /**
   * Cria ou obtém a pasta de uma atividade dentro da pasta do projeto
   */
  async createOrGetActivityFolder(
    projectId: string,
    projectTitle: string,
    activityId: string,
    activityName: string,
    departmentId?: string,
    departmentName?: string,
    institutionId?: string,
    institutionName?: string,
  ): Promise<string> {
    const sanitizedName = this.sanitizeFolderName(activityName);
    const folderName = `activity-${sanitizedName}-${activityId}`;
    const cacheKey = `activity-${activityId}`;

    // Verificar cache
    if (this.folderCache.has(cacheKey)) {
      return this.folderCache.get(cacheKey)!;
    }

    // Obter pasta do projeto primeiro (com hierarquia completa)
    const projectFolderId = await this.createOrGetProjectFolder(
      projectId,
      projectTitle,
      departmentId,
      departmentName,
      institutionId,
      institutionName,
    );

    // Buscar ou criar pasta da atividade
    const folderId = await this.findOrCreateFolder(folderName, projectFolderId);

    // Armazenar em cache
    this.folderCache.set(cacheKey, folderId);

    return folderId;
  }

  /**
   * Upload de arquivo para o Google Drive
   */
  async uploadFile(
    buffer: Buffer,
    filename: string,
    mimeType: string,
    folderId: string,
  ): Promise<string> {
    try {
      console.log('Upload attempt:', {
        filename,
        mimeType,
        folderId,
        bufferSize: buffer.length,
      });

      // Converter buffer para stream
      const stream = Readable.from(buffer);

      // Upload do arquivo
      const response = await this.drive.files.create({
        requestBody: {
          name: `${Date.now()}-${filename}`,
          parents: [folderId],
        },
        media: {
          mimeType,
          body: stream,
        },
        fields: 'id',
        supportsAllDrives: true,
      });

      console.log('Upload successful:', response.data.id);

      if (!response.data.id) {
        throw new Error('Failed to get file ID from Drive response');
      }

      return response.data.id;
    } catch (error) {
      console.error('Google Drive upload error details:', {
        message: error.message,
        code: error.code,
        errors: error.errors,
        response: error.response?.data,
      });
      throw new Error(`Google Drive upload failed: ${error.message}`);
    }
  }

  /**
   * Download de arquivo do Google Drive
   */
  async downloadFile(fileId: string): Promise<Buffer> {
    try {
      const response = await this.drive.files.get(
        {
          fileId,
          alt: 'media',
          supportsAllDrives: true,
        },
        { responseType: 'arraybuffer' },
      );

      return Buffer.from(response.data as ArrayBuffer);
    } catch (error) {
      throw new Error(`Google Drive download failed: ${error.message}`);
    }
  }

  /**
   * Deleta arquivo do Google Drive
   */
  async deleteFile(fileId: string): Promise<void> {
    try {
      await this.drive.files.delete({
        fileId,
        supportsAllDrives: true,
      });
    } catch (error) {
      throw new Error(`Google Drive delete failed: ${error.message}`);
    }
  }

  /**
   * Obtém metadados de um arquivo
   */
  async getFileMetadata(fileId: string): Promise<drive_v3.Schema$File> {
    try {
      const response = await this.drive.files.get({
        fileId,
        fields: 'id, name, mimeType, size, createdTime, modifiedTime',
        supportsAllDrives: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to get file metadata: ${error.message}`);
    }
  }

  /**
   * Busca uma pasta existente ou cria uma nova
   */
  private async findOrCreateFolder(name: string, parentId?: string): Promise<string> {
    try {
      // Buscar pasta existente
      const query = parentId
        ? `name='${name}' and '${parentId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`
        : `name='${name}' and mimeType='application/vnd.google-apps.folder' and trashed=false`;

      const response = await this.drive.files.list({
        q: query,
        fields: 'files(id, name)',
        spaces: 'drive',
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      });

      // Se encontrou, retornar ID
      if (response.data.files && response.data.files.length > 0) {
        return response.data.files[0].id!;
      }

      // Caso contrário, criar nova pasta
      const createResponse = await this.drive.files.create({
        requestBody: {
          name,
          mimeType: 'application/vnd.google-apps.folder',
          parents: parentId ? [parentId] : undefined,
        },
        fields: 'id',
        supportsAllDrives: true,
      });

      if (!createResponse.data.id) {
        throw new Error('Failed to create folder');
      }

      return createResponse.data.id;
    } catch (error) {
      throw new Error(`Failed to find or create folder: ${error.message}`);
    }
  }

  /**
   * Limpa o cache de folders (útil para testes ou quando há mudanças)
   */
  clearCache(): void {
    this.folderCache.clear();
  }
}
