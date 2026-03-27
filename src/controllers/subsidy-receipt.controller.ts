import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Req,
  Res,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { SubsidyReceiptService } from '../services/subsidy-receipt.service';
import { JwtAuthGuard } from '../middlewares/jwt-auth.guard';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { Permission } from '../middlewares/permissions.decorator';
import { DecimalHelper } from '../common/helpers/decimal.helper';

interface RequestWithUser extends Request {
  user: {
    userId: string;
    userRoles: string[];
  };
}

@Controller('subsidy-receipts')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class SubsidyReceiptController {
  constructor(private readonly subsidyReceiptService: SubsidyReceiptService) {}

  @Post('upload')
  @Permission('uploadSubsidyReceipt')
  @UseInterceptors(FileInterceptor('file'))
  async uploadReceipt(
    @UploadedFile() file: Express.Multer.File,
    @Body('subsidy_request_id') subsidyRequestId: string,
    @Body('subsidy_request_item_id') subsidyRequestItemId: string,
    @Body('project_activity_id') projectActivityId: string,
    @Body('is_refund_receipt') isRefundReceipt: string,
    @Body('type') type: string,
    @Body('amount') amount: string,
    @Body('note') note: string,
    @Req() req: RequestWithUser,
  ) {
    if (!file) {
      throw new Error('No file provided');
    }

    // Convert Multer file to FileUpload format
    const fileUpload = {
      filename: file.originalname,
      mimetype: file.mimetype,
      encoding: file.encoding,
      createReadStream: () => {
        const { Readable } = require('stream');
        const stream = new Readable();
        stream.push(file.buffer);
        stream.push(null);
        return stream;
      },
    };

    const input = {
      subsidy_request_id: subsidyRequestId,
      subsidy_request_item_id: subsidyRequestItemId || undefined,
      project_activity_id: projectActivityId || undefined,
      is_refund_receipt: isRefundReceipt === 'true',
      type,
      amount: amount ? DecimalHelper.toDecimal(amount).toNumber() : undefined,
      note: note || undefined,
    };

    const result = await this.subsidyReceiptService.uploadReceipt(
      input,
      fileUpload as any,
      req.user.userId,
    );

    return result;
  }

  @Get(':id/download')
  @Permission('downloadSubsidyReceipt')
  async downloadReceipt(
    @Param('id') id: string,
    @Req() req: RequestWithUser,
    @Res() res: Response,
  ) {
    const result = await this.subsidyReceiptService.downloadReceipt(id, req.user.userId);

    // Set headers for download
    res.setHeader('Content-Type', result.mimeType || 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${result.filename}"`);

    // Send buffer
    res.send(result.buffer);
  }

  @Delete(':id')
  @Permission('deleteSubsidyReceipt')
  @HttpCode(HttpStatus.OK)
  async deleteReceipt(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.subsidyReceiptService.deleteReceipt(id, req.user.userId);
  }

  @Post(':id/validate')
  @Permission('validateSubsidyReceipt')
  @HttpCode(HttpStatus.OK)
  async validateReceipt(
    @Param('id') id: string,
    @Body('note') note: string,
    @Req() req: RequestWithUser,
  ) {
    return this.subsidyReceiptService.validateReceipt(id, req.user.userId, note || undefined);
  }

  @Post(':id/reject')
  @Permission('validateSubsidyReceipt') // Same permission as validate
  @HttpCode(HttpStatus.OK)
  async rejectReceipt(
    @Param('id') id: string,
    @Body('reason') reason: string,
    @Req() req: RequestWithUser,
  ) {
    return this.subsidyReceiptService.rejectReceipt(id, req.user.userId, reason);
  }

  @Get()
  @Permission('getSubsidyReceipts')
  async getReceipts(
    @Query('subsidy_request_id') subsidyRequestId?: string,
    @Query('subsidy_request_item_id') subsidyRequestItemId?: string,
    @Query('project_activity_id') projectActivityId?: string,
  ) {
    if (subsidyRequestId) {
      return this.subsidyReceiptService.getReceiptsBySubsidyRequest(subsidyRequestId);
    }
    if (subsidyRequestItemId) {
      return this.subsidyReceiptService.getReceiptsBySubsidyRequestItem(subsidyRequestItemId);
    }
    if (projectActivityId) {
      return this.subsidyReceiptService.getReceiptsByActivity(projectActivityId);
    }
    return [];
  }

  @Get('by-request/:subsidyRequestId')
  @Permission('getSubsidyReceipts')
  async getReceiptsByRequest(@Param('subsidyRequestId') subsidyRequestId: string) {
    return this.subsidyReceiptService.getReceiptsBySubsidyRequest(subsidyRequestId);
  }

  @Get('by-item/:subsidyRequestItemId')
  @Permission('getSubsidyReceipts')
  async getReceiptsByItem(@Param('subsidyRequestItemId') subsidyRequestItemId: string) {
    return this.subsidyReceiptService.getReceiptsBySubsidyRequestItem(subsidyRequestItemId);
  }


}
