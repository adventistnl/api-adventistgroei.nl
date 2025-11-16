import { Injectable } from '@nestjs/common';
import { InviteEmailDto } from '../dto/email.dto';
import { NodemailerEmailRepository } from '../repositories/emails/nodemailer.repository';
import { ForgotPasswordEmailDto } from '../dto/forgot-password-email.dto';

@Injectable()
export class EmailService {
  constructor(
    private readonly nodemailerRepository: NodemailerEmailRepository
  ) {}

  async sendInviteEmail(data: InviteEmailDto): Promise<void> {
    await this.nodemailerRepository.sendInviteEmail(data);
  }

  async sendForgotPasswordEmail(data: ForgotPasswordEmailDto): Promise<void> {
    await this.nodemailerRepository.sendForgotPasswordEmail(data);
  }
}
