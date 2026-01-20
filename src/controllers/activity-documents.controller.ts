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
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { ActivityDocumentsService } from '../services/activity-documents.service';
import { JwtAuthGuard } from '../middlewares/jwt-auth.guard';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { Permission } from '../middlewares/permissions.decorator';

interface RequestWithUser extends Request {
  user: {
    userId: string;
    userRoles: string[];
  };
}

@Controller('activity-documents')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ActivityDocumentsController {
  constructor(private readonly activityDocumentsService: ActivityDocumentsService) {}

  @Post('upload')
  @Permission('uploadActivityDocument')
  @UseInterceptors(FileInterceptor('file'))
  async uploadDocument(
    @UploadedFile() file: Express.Multer.File,
    @Body('activity_id') activityId: string,
    @Body('project_activity_id') projectActivityId: string,
    @Body('type') type: string,
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
      activity_id: activityId,
      project_activity_id: projectActivityId,
      type,
    };

    const result = await this.activityDocumentsService.uploadDocument(
      input,
      fileUpload as any,
      req.user.userId,
    );

    return result;
  }

  @Get(':id/download')
  @Permission('downloadActivityDocument')
  async downloadDocument(
    @Param('id') id: string,
    @Req() req: RequestWithUser,
    @Res() res: Response,
  ) {
    const result = await this.activityDocumentsService.downloadDocument(id, req.user.userId);

    // Set headers for download
    res.setHeader('Content-Type', result.mimeType || 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${result.filename}"`);

    // Send buffer
    res.send(result.buffer);
  }

  @Delete(':id')
  @Permission('deleteActivityDocument')
  @HttpCode(HttpStatus.OK)
  async deleteDocument(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.activityDocumentsService.deleteDocument(id, req.user.userId);
  }

  @Post(':id/validate')
  @Permission('validateActivityDocument')
  @HttpCode(HttpStatus.OK)
  async validateDocument(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.activityDocumentsService.validateDocument(id, req.user.userId);
  }
}
