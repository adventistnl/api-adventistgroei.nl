import { Injectable } from '@nestjs/common';
import { InviteEmailDto } from '../dto/email.dto';
import { NodemailerEmailRepository } from '../repositories/emails/nodemailer.repository';
import { ForgotPasswordEmailDto } from '../dto/forgot-password-email.dto';
import { RefundApprovedEmailDto } from '../dto/refund-approved-email.dto';
import { RefundRequestedEmailDto } from '../dto/refund-requested-email.dto';
import { ProjectStatusChangedEmailDto } from '../dto/project-status-changed-email.dto';
import { SubsidyStatusChangedEmailDto } from '../dto/subsidy-status-changed-email.dto';
import { EmailVerificationDto } from '../dto/email-verification.dto';
import { ScheduleNotificationEmailDto } from '../dto/schedule-notification-email.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class EmailService {
  constructor(
    private readonly nodemailerRepository: NodemailerEmailRepository,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Returns true if the user associated with `email` has opted in to
   * non-crucial email notifications (recieve_emails = true or field absent).
   * Crucial emails (invite, forgot-password, verification code) bypass this check.
   */
  private async canReceiveOptionalEmails(email: string): Promise<boolean> {
    const user = await this.prisma.user.findFirst({
      where: { email: email.toLowerCase(), is_deleted: false },
      select: { recieve_emails: true },
    });
    // If user not found or preference is not set, default to allowing emails
    return user?.recieve_emails ?? true;
  }

  // ──────────────────────────────────────────────────────────────────────────
  // CRUCIAL emails — always sent regardless of user preference
  // ──────────────────────────────────────────────────────────────────────────

  async sendInviteEmail(data: InviteEmailDto): Promise<void> {
    await this.nodemailerRepository.sendInviteEmail(data);
  }

  async sendForgotPasswordEmail(data: ForgotPasswordEmailDto): Promise<void> {
    await this.nodemailerRepository.sendForgotPasswordEmail(data);
  }

  async sendEmailVerificationCode(data: EmailVerificationDto): Promise<void> {
    await this.nodemailerRepository.sendEmailVerificationCode(data);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // OPTIONAL emails — skipped if user opted out
  // ──────────────────────────────────────────────────────────────────────────

  async sendRefundApprovedEmail(data: RefundApprovedEmailDto): Promise<void> {
    if (!(await this.canReceiveOptionalEmails(data.to))) return;
    await this.nodemailerRepository.sendRefundApprovedEmail(data);
  }

  async sendRefundRequestedEmail(data: RefundRequestedEmailDto): Promise<void> {
    if (!(await this.canReceiveOptionalEmails(data.to))) return;
    await this.nodemailerRepository.sendRefundRequestedEmail(data);
  }

  async sendRefundReceivedEmail(data: RefundApprovedEmailDto): Promise<void> {
    if (!(await this.canReceiveOptionalEmails(data.to))) return;
    await this.nodemailerRepository.sendRefundReceivedEmail(data);
  }

  async sendProjectStatusChangedEmail(data: ProjectStatusChangedEmailDto): Promise<void> {
    if (!(await this.canReceiveOptionalEmails(data.to))) return;
    await this.nodemailerRepository.sendProjectStatusChangedEmail(data);
  }

  async sendSubsidyStatusChangedEmail(data: SubsidyStatusChangedEmailDto): Promise<void> {
    if (!(await this.canReceiveOptionalEmails(data.to))) return;
    await this.nodemailerRepository.sendSubsidyStatusChangedEmail(data);
  }

  async sendSubsidyStatusChangedFinanceEmail(data: SubsidyStatusChangedEmailDto): Promise<void> {
    if (!(await this.canReceiveOptionalEmails(data.to))) return;
    await this.nodemailerRepository.sendSubsidyStatusChangedFinanceEmail(data);
  }

  /** R6.1 item 7 — email for every scheduling event requiring action (invite, request,
   * accept/decline, monthly-close reminders). The repository itself also checks the
   * preference; this call additionally guards against sending when the address isn't set. */
  async sendScheduleNotificationEmail(data: ScheduleNotificationEmailDto): Promise<void> {
    if (!(await this.canReceiveOptionalEmails(data.to))) return;
    await this.nodemailerRepository.sendScheduleNotificationEmail(data);
  }
}
