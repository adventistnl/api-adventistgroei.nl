import { Resolver, Query, Mutation, Args, Context, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GraphQLUpload, FileUpload } from 'graphql-upload-minimal';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { Permission } from 'src/middlewares';
import { ActivityDocuments } from 'src/@generated/activity-documents/activity-documents.model';
import { ActivityDocumentsService } from '../services/activity-documents.service';
import { UploadActivityDocumentDto } from '../dto/activity-documents.dto';

@Resolver(() => ActivityDocuments)
export class ActivityDocumentsResolver {
  constructor(private readonly service: ActivityDocumentsService) {}

  /**
   * Upload de documento de atividade
   */
  @Mutation(() => ActivityDocuments)
  @UseGuards(PermissionsGuard)
  @Permission('uploadActivityDocument')
  async uploadActivityDocument(
    @Args('input') input: UploadActivityDocumentDto,
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
    @Context('userId') userId: string,
  ): Promise<ActivityDocuments> {
    return this.service.uploadDocument(input, file, userId);
  }

  /**
   * Download de documento (retorna Base64)
   */
  @Query(() => String)
  @UseGuards(PermissionsGuard)
  @Permission('downloadActivityDocument')
  async downloadActivityDocument(
    @Args('id', { type: () => ID }) id: string,
    @Context('userId') userId: string,
  ): Promise<string> {
    const result = await this.service.downloadDocument(id, userId);

    // Converter buffer para Base64
    return result.buffer.toString('base64');
  }

  /**
   * Deletar documento
   */
  @Mutation(() => ActivityDocuments)
  @UseGuards(PermissionsGuard)
  @Permission('deleteActivityDocument')
  async deleteActivityDocument(
    @Args('id', { type: () => ID }) id: string,
    @Context('userId') userId: string,
  ): Promise<ActivityDocuments> {
    return this.service.deleteDocument(id, userId);
  }

  /**
   * Validar documento
   */
  @Mutation(() => ActivityDocuments)
  @UseGuards(PermissionsGuard)
  @Permission('validateActivityDocument')
  async validateActivityDocument(
    @Args('id', { type: () => ID }) id: string,
    @Context('userId') userId: string,
  ): Promise<ActivityDocuments> {
    return this.service.validateDocument(id, userId);
  }

  /**
   * Listar documentos de uma atividade
   */
  @Query(() => [ActivityDocuments])
  @UseGuards(PermissionsGuard)
  @Permission('getActivityDocuments')
  async getActivityDocuments(
    @Args('activityId', { type: () => ID }) activityId: string,
  ): Promise<ActivityDocuments[]> {
    return this.service.getDocumentsByActivity(activityId);
  }
}
