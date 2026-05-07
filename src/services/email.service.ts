import { Injectable } from '@nestjs/common';
import { InviteEmailDto } from '../dto/email.dto';
import { NodemailerEmailRepository } from '../repositories/emails/nodemailer.repository';
import { ForgotPasswordEmailDto } from '../dto/forgot-password-email.dto';
import { RefundApprovedEmailDto } from '../dto/refund-approved-email.dto';
import { RefundRequestedEmailDto } from '../dto/refund-requested-email.dto';
import { ProjectStatusChangedEmailDto } from '../dto/project-status-changed-email.dto';
import { SubsidyStatusChangedEmailDto } from '../dto/subsidy-status-changed-email.dto';
import { EmailVerificationDto } from '../dto/email-verification.dto';

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

  async sendEmailVerificationCode(data: EmailVerificationDto): Promise<void> {
    await this.nodemailerRepository.sendEmailVerificationCode(data);
  }

  async sendRefundApprovedEmail(data: RefundApprovedEmailDto): Promise<void> {
    await this.nodemailerRepository.sendRefundApprovedEmail(data);
  }

  async sendRefundRequestedEmail(data: RefundRequestedEmailDto): Promise<void> {
    await this.nodemailerRepository.sendRefundRequestedEmail(data);
  }

  async sendRefundReceivedEmail(data: RefundApprovedEmailDto): Promise<void> {
    await this.nodemailerRepository.sendRefundReceivedEmail(data);
  }

  async sendProjectStatusChangedEmail(data: ProjectStatusChangedEmailDto): Promise<void> {
    await this.nodemailerRepository.sendProjectStatusChangedEmail(data);
  }

  async sendSubsidyStatusChangedEmail(data: SubsidyStatusChangedEmailDto): Promise<void> {
    await this.nodemailerRepository.sendSubsidyStatusChangedEmail(data);
  }

  async sendSubsidyStatusChangedFinanceEmail(data: SubsidyStatusChangedEmailDto): Promise<void> {
    await this.nodemailerRepository.sendSubsidyStatusChangedFinanceEmail(data);
  }
}
