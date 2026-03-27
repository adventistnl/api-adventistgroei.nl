import { Resolver, Query, Mutation, Args, Context, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GraphQLUpload, FileUpload } from 'graphql-upload-minimal';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { Permission } from 'src/middlewares';
import { SubsidyReceipt } from 'src/@generated/subsidy-receipt/subsidy-receipt.model';
import { SubsidyReceiptService } from '../services/subsidy-receipt.service';
import { UploadSubsidyReceiptDto, GetSubsidyReceiptsDto, RejectSubsidyReceiptDto } from '../dto/subsidy-receipt.dto';

@Resolver(() => SubsidyReceipt)
export class SubsidyReceiptResolver {
  constructor(private readonly service: SubsidyReceiptService) {}

  /**
   * Upload de recibo de subsídio
   */
  @Mutation(() => SubsidyReceipt)
  @UseGuards(PermissionsGuard)
  @Permission('uploadSubsidyReceipt')
  async uploadSubsidyReceipt(
    @Args('input') input: UploadSubsidyReceiptDto,
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
    @Context('userId') userId: string,
  ): Promise<SubsidyReceipt> {
    return this.service.uploadReceipt(input, file, userId);
  }

  /**
   * Download de recibo (retorna Base64)
   */
  @Query(() => String)
  @UseGuards(PermissionsGuard)
  @Permission('downloadSubsidyReceipt')
  async downloadSubsidyReceipt(
    @Args('id', { type: () => ID }) id: string,
    @Context('userId') userId: string,
  ): Promise<string> {
    const result = await this.service.downloadReceipt(id, userId);
    return result.buffer.toString('base64');
  }

  /**
   * Deletar recibo
   */
  @Mutation(() => SubsidyReceipt)
  @UseGuards(PermissionsGuard)
  @Permission('deleteSubsidyReceipt')
  async deleteSubsidyReceipt(
    @Args('id', { type: () => ID }) id: string,
    @Context('userId') userId: string,
  ): Promise<SubsidyReceipt> {
    return this.service.deleteReceipt(id, userId);
  }

  /**
   * Validar recibo
   */
  @Mutation(() => SubsidyReceipt)
  @UseGuards(PermissionsGuard)
  @Permission('validateSubsidyReceipt')
  async validateSubsidyReceipt(
    @Args('id', { type: () => ID }) id: string,
    @Args('note', { type: () => String, nullable: true }) note: string | undefined,
    @Context('userId') userId: string,
  ): Promise<SubsidyReceipt> {
    return this.service.validateReceipt(id, userId, note);
  }

  /**
   * Rejeitar recibo
   */
  @Mutation(() => SubsidyReceipt)
  @UseGuards(PermissionsGuard)
  @Permission('validateSubsidyReceipt')
  async rejectSubsidyReceipt(
    @Args('id', { type: () => ID }) id: string,
    @Args('reason', { type: () => String, nullable: true }) reason: string | undefined,
    @Context('userId') userId: string,
  ): Promise<SubsidyReceipt> {
    return this.service.rejectReceipt(id, userId, reason);
  }

  /**
   * Listar recibos de uma solicitação de subsídio
   */
  @Query(() => [SubsidyReceipt])
  @UseGuards(PermissionsGuard)
  @Permission('getSubsidyReceipts')
  async getSubsidyReceipts(
    @Args('input') input: GetSubsidyReceiptsDto,
  ): Promise<SubsidyReceipt[]> {
    if (input.subsidy_request_id) {
      return this.service.getReceiptsBySubsidyRequest(input.subsidy_request_id);
    }
    if (input.subsidy_request_item_id) {
      return this.service.getReceiptsBySubsidyRequestItem(input.subsidy_request_item_id);
    }
    if (input.project_activity_id) {
      return this.service.getReceiptsByActivity(input.project_activity_id);
    }
    return [];
  }

  /**
   * Listar recibos de uma solicitação de subsídio específica
   */
  @Query(() => [SubsidyReceipt])
  @UseGuards(PermissionsGuard)
  @Permission('getSubsidyReceipts')
  async getSubsidyReceiptsByRequestId(
    @Args('subsidyRequestId', { type: () => ID }) subsidyRequestId: string,
  ): Promise<SubsidyReceipt[]> {
    return this.service.getReceiptsBySubsidyRequest(subsidyRequestId);
  }

  /**
   * Listar recibos de um item de solicitação de subsídio específico
   */
  @Query(() => [SubsidyReceipt])
  @UseGuards(PermissionsGuard)
  @Permission('getSubsidyReceipts')
  async getSubsidyReceiptsByItemId(
    @Args('subsidyRequestItemId', { type: () => ID }) subsidyRequestItemId: string,
  ): Promise<SubsidyReceipt[]> {
    return this.service.getReceiptsBySubsidyRequestItem(subsidyRequestItemId);
  }
}
