import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import { loadNamespaces } from 'i18next';
import { translate } from 'i18n.config';

import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { InviteEmailDto } from 'src/dto/email.dto';
import { ForgotPasswordEmailDto } from 'src/dto/forgot-password-email.dto';
import { RefundApprovedEmailDto } from 'src/dto/refund-approved-email.dto';
import { UserService } from '../../services/user.service';
import { MustacheService } from '../../services/mustache.service';
import { LanguagePreference } from '../../@generated/prisma/language-preference.enum';
import { RefundRequestedEmailDto } from '../../dto/refund-requested-email.dto';
import { ProjectStatusChangedEmailDto } from '../../dto/project-status-changed-email.dto';
import { SubsidyStatusChangedEmailDto } from '../../dto/subsidy-status-changed-email.dto';
import { EmailVerificationDto } from '../../dto/email-verification.dto';
import { ScheduleNotificationEmailDto, ScheduleNotificationEventType } from '../../dto/schedule-notification-email.dto';

@Injectable()
export class NodemailerEmailRepository {
  private transporter: Transporter;
  private nodemailerEmail: string;

  constructor(
    private readonly userService: UserService,
    private readonly mustacheService: MustacheService
  ) {
    const smtpHost: string = process.env.SMTP_HOST || '';
    const smtpPort: number = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser: string = process.env.SMTP_USER || '';
    const smtpPass: string = process.env.SMTP_PASS || '';

    if (!smtpHost || !smtpUser || !smtpPass) {
      throw new Error('SMTP configuration is not defined in the environment variables');
    }

    this.transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10000,  // 10s to establish connection
      greetingTimeout: 10000,    // 10s for SMTP greeting
      socketTimeout: 15000,      // 15s idle socket timeout
    }) as Transporter;

    this.nodemailerEmail = smtpUser;
  }

  private getTranslation(key: string, lng: LanguagePreference, options?: Record<string, any>): string {
    return translate(`invite.${key}`, lng, { ns: 'emails', ...options }) || '';
  }

  async sendInviteEmail(data: InviteEmailDto): Promise<void> {
    const inviter = await this.userService.getUserById(data.inviter_id);
    if (!inviter) throw new CustomGraphQLError('Inviter not found', ErrorCode.NOT_FOUND, 404);

    const language = inviter.language_preference as LanguagePreference || LanguagePreference.en;
    await loadNamespaces(['emails']);

    const subject = this.getTranslation('subject', language);

    const templateData = {
      url: data.url,
      subject,
      body: data.message || this.getTranslation('body', language, { inviterName: inviter.name }),
      greeting: this.getTranslation('greeting', language),
      cta: this.getTranslation('cta', language),
      expiry: this.getTranslation('expiry', language),
      ignore: this.getTranslation('ignore', language),
      footer: this.getTranslation('footer', language),
    };
    await this.sendEmail(data.to, subject, 'invite-user', templateData);
  }

  async sendEmail(to: string, subject: string, templateName: string, templateData: Record<string, any>): Promise<void> {
    const SEND_TIMEOUT_MS = 15000;
    try {
      const html: string = this.mustacheService.renderMustacheTemplate(templateName, templateData);

      const sendPromise = this.transporter.sendMail({
        from: this.nodemailerEmail,
        to,
        subject,
        html,
      });

      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error(`Email sending timed out after ${SEND_TIMEOUT_MS / 1000}s`)), SEND_TIMEOUT_MS)
      );

      await Promise.race([sendPromise, timeoutPromise]);
    } catch (error) {
      throw new CustomGraphQLError(
        `Failed to send email: ${error instanceof Error ? error.message : String(error)}`,
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
      );
    }
  }


    async sendForgotPasswordEmail(data: ForgotPasswordEmailDto): Promise<void> {
      const language = (data.language as LanguagePreference) || LanguagePreference.en;
      await loadNamespaces(['emails']);

      const subject = translate('forgotPassword.subject', language, { ns: 'emails' }) || 'Your Password Reset Code';
      const templateData = {
        code: data.code,
        expiresIn: data.expiresIn,
        subject,
        body: translate('forgotPassword.body', language, { ns: 'emails', code: data.code, expiresIn: data.expiresIn }) || `Your verification code is: ${data.code}\nThis code expires in ${data.expiresIn}.`,
        greeting: translate('forgotPassword.greeting', language, { ns: 'emails' }) || '',
        expiry: translate('forgotPassword.expiry', language, { ns: 'emails', expiresIn: data.expiresIn }) || '',
        ignore: translate('forgotPassword.ignore', language, { ns: 'emails' }) || '',
        footer: translate('forgotPassword.footer', language, { ns: 'emails' }) || '',
      };
      await this.sendEmail(data.to, subject, 'forgot-password', templateData);
    }

    async sendEmailVerificationCode(data: EmailVerificationDto): Promise<void> {
      const language = (data.language as LanguagePreference) || LanguagePreference.en;
      await loadNamespaces(['emails']);

      const subject = translate('emailVerification.subject', language, { ns: 'emails' }) || 'Your Email Verification Code';
      const greeting = data.userName
        ? translate('emailVerification.greetingNamed', language, { ns: 'emails', name: data.userName }) || `Hello ${data.userName},`
        : translate('emailVerification.greeting', language, { ns: 'emails' }) || 'Hello!';

      const templateData = {
        code: data.code,
        expiresIn: data.expiresIn,
        subject,
        greeting,
        body: translate('emailVerification.body', language, { ns: 'emails', code: data.code, expiresIn: data.expiresIn }) || `Your email verification code is: ${data.code}\nThis code expires in ${data.expiresIn}.`,
        expiry: translate('emailVerification.expiry', language, { ns: 'emails', expiresIn: data.expiresIn }) || `This code will expire in ${data.expiresIn}.`,
        ignore: translate('emailVerification.ignore', language, { ns: 'emails' }) || 'If you did not request this verification, please ignore this email.',
        footer: translate('emailVerification.footer', language, { ns: 'emails' }) || 'Best regards,\nThe Adventist Groei Team',
      };
      await this.sendEmail(data.to, subject, 'email-verification', templateData);
    }



    async sendRefundApprovedEmail(data: RefundApprovedEmailDto): Promise<void> {
      const language = data.language || LanguagePreference.en;
      await loadNamespaces(['emails']);

      const subject = translate('refundApproved.subject', language, { ns: 'emails' }) || 'Refund Approved';
      const templateData = {
        subsidyName: data.subsidyName,
        projectName: data.projectName,
        projectUrl: data.projectUrl,
        refundAmount: data.refundAmount,
        requesterName: data.requesterName,
        subject,
        body: translate('refundApproved.body', language, { ns: 'emails', amount: data.refundAmount, subsidyName: data.subsidyName, projectName: data.projectName }) || `Your refund of ${data.refundAmount} has been approved for subsidy ${data.subsidyName}.`,
        greeting: translate('refundApproved.greeting', language, { ns: 'emails', name: data.requesterName }) || `Hello ${data.requesterName},`,
        footer: translate('refundApproved.footer', language, { ns: 'emails' }) || '',
        cta: translate('refundApproved.cta', language, { ns: 'emails' }) || 'View Project',
      };
      await this.sendEmail(data.to, subject, 'refund-approved', templateData);
    }

    async sendRefundRequestedEmail(data: RefundRequestedEmailDto): Promise<void> {
      const language = data.language || LanguagePreference.en;
      await loadNamespaces(['emails']);

      const subject = translate('refundRequested.subject', language, { ns: 'emails' }) || 'Refund Requested';
      const templateData = {
        subsidyName: data.subsidyName,
        projectName: data.projectName,
        projectUrl: data.projectUrl,
        refundAmount: data.refundAmount,
        requesterName: data.requesterName,
        reason: data.reason,
        subject,
        body: translate('refundRequested.body', language, { ns: 'emails', amount: data.refundAmount, subsidyName: data.subsidyName, projectName: data.projectName }) || `A refund request of ${data.refundAmount} has been received for subsidy ${data.subsidyName}.`,
        greeting: translate('refundRequested.greeting', language, { ns: 'emails', name: data.requesterName }) || `Hello ${data.requesterName},`,
        footer: translate('refundRequested.footer', language, { ns: 'emails' }) || '',
        cta: translate('refundRequested.cta', language, { ns: 'emails' }) || 'View Project',
      };
      await this.sendEmail(data.to, subject, 'refund-requested', templateData);
    }

    async sendRefundReceivedEmail(data: RefundApprovedEmailDto): Promise<void> {
      const language = data.language || LanguagePreference.en;
      await loadNamespaces(['emails']);

      const subject = translate('refundReceived.subject', language, { ns: 'emails' }) || 'Refund Received';
      const templateData = {
        subsidyName: data.subsidyName,
        projectName: data.projectName,
        projectUrl: data.projectUrl,
        refundAmount: data.refundAmount,
        requesterName: data.requesterName,
        subject,
        body: translate('refundReceived.body', language, { ns: 'emails', amount: data.refundAmount, subsidyName: data.subsidyName, projectName: data.projectName }) || `We have confirmed receipt of your refund of ${data.refundAmount} for subsidy ${data.subsidyName}.`,
        greeting: translate('refundReceived.greeting', language, { ns: 'emails', name: data.requesterName }) || `Hello ${data.requesterName},`,
        footer: translate('refundReceived.footer', language, { ns: 'emails' }) || '',
        cta: translate('refundReceived.cta', language, { ns: 'emails' }) || 'View Project',
      };
      await this.sendEmail(data.to, subject, 'refund-received', templateData);
    }

    async sendProjectStatusChangedEmail(data: ProjectStatusChangedEmailDto): Promise<void> {
      const language = data.language || LanguagePreference.en;
      await loadNamespaces(['emails', 'project']);

      // We'll use translations if they exist, or fallback to the provided data
      const translatedStatus = translate(`status.${data.newStatus}`, language, { ns: 'project' }) || data.newStatus;
      const subject = translate('projectStatusChanged.subject', language, { ns: 'emails', projectName: data.projectName, newStatus: translatedStatus }) || `Project Status Update: ${data.projectName} - ${translatedStatus}`;
      
      const templateData = {
        projectName: data.projectName,
        projectUrl: data.projectUrl,
        newStatus: translatedStatus,
        recipientName: data.recipientName,
        subject,
        body: translate('projectStatusChanged.body', language, { ns: 'emails', projectName: data.projectName, newStatus: translatedStatus }) || `The status of the project "${data.projectName}" has been changed to ${translatedStatus}.`,
        greeting: translate('projectStatusChanged.greeting', language, { ns: 'emails', name: data.recipientName }) || `Hello ${data.recipientName},`,
        footer: translate('projectStatusChanged.footer', language, { ns: 'emails' }) || '',
        cta: translate('projectStatusChanged.cta', language, { ns: 'emails' }) || 'View Project',
      };
      await this.sendEmail(data.to, subject, 'project-status-changed', templateData);
    }

    async sendSubsidyStatusChangedEmail(data: SubsidyStatusChangedEmailDto): Promise<void> {
      const language = data.language || LanguagePreference.en;
      await loadNamespaces(['emails', 'subsidy']);

      const translatedStatus = translate(`status.${data.newStatus.toLowerCase().replace(' ', '_')}`, language, { ns: 'subsidy' }) || data.newStatus;
      const subject = translate('subsidyStatusChanged.subject', language, {
        ns: 'emails',
        subsidyDescription: data.subsidyDescription,
        newStatus: translatedStatus,
      }) || `Subsidy Status Update: ${data.subsidyDescription} - ${translatedStatus}`;

      const templateData = {
        subsidyDescription: data.subsidyDescription,
        projectName: data.projectName,
        projectUrl: data.projectUrl,
        newStatus: translatedStatus,
        recipientName: data.recipientName,
        subject,
        body: translate('subsidyStatusChanged.body', language, {
          ns: 'emails',
          subsidyDescription: data.subsidyDescription,
          projectName: data.projectName,
          newStatus: translatedStatus,
        }) || `The status of the subsidy request "${data.subsidyDescription}" for project "${data.projectName}" has been updated to ${translatedStatus}.`,
        greeting: translate('subsidyStatusChanged.greeting', language, { ns: 'emails', name: data.recipientName }) || `Hello ${data.recipientName},`,
        footer: translate('subsidyStatusChanged.footer', language, { ns: 'emails' }) || '',
        cta: translate('subsidyStatusChanged.cta', language, { ns: 'emails' }) || 'View Project',
      };
      // Reuse the same visual template as project status changed
      await this.sendEmail(data.to, subject, 'project-status-changed', templateData);
    }

    /**
     * Sends a targeted email to finance users when a subsidy reaches a status
     * that requires their action (PENDING, APPROVED, ADVANCED_CLOSED, WAITING_REFUND).
     * Uses status-specific subject/body keys for clear, actionable messaging.
     */
    async sendSubsidyStatusChangedFinanceEmail(data: SubsidyStatusChangedEmailDto): Promise<void> {
      const language = data.language || LanguagePreference.en;
      await loadNamespaces(['emails', 'subsidy']);

      const statusKey = data.newStatus.toLowerCase().replace(/ /g, '_');
      const interpolation = {
        ns: 'emails',
        subsidyDescription: data.subsidyDescription,
        projectName: data.projectName,
      };

      const subject =
        translate(`subsidyStatusChanged.finance.${statusKey}.subject`, language, interpolation) ||
        translate('subsidyStatusChanged.subject', language, { ...interpolation, newStatus: data.newStatus }) ||
        `Subsidy Update (${data.newStatus}): ${data.subsidyDescription}`;

      const body =
        translate(`subsidyStatusChanged.finance.${statusKey}.body`, language, interpolation) ||
        translate('subsidyStatusChanged.body', language, { ...interpolation, newStatus: data.newStatus }) ||
        `The subsidy "${data.subsidyDescription}" for project "${data.projectName}" is now ${data.newStatus}.`;

      const templateData = {
        subsidyDescription: data.subsidyDescription,
        projectName: data.projectName,
        projectUrl: data.projectUrl,
        newStatus: data.newStatus,
        recipientName: data.recipientName,
        subject,
        body,
        greeting: translate('subsidyStatusChanged.greeting', language, { ns: 'emails', name: data.recipientName }) || `Hello ${data.recipientName},`,
        footer: translate('subsidyStatusChanged.footer', language, { ns: 'emails' }) || '',
        cta: translate('subsidyStatusChanged.cta', language, { ns: 'emails' }) || 'View Project',
      };

      await this.sendEmail(data.to, subject, 'project-status-changed', templateData);
    }

    /**
     * R6.1 item 7 (blueprint) — email notification for every scheduling event that requires
     * user action. One shared template/method for all scheduling event types (matching the
     * subsidyStatusChanged finance methods' precedent of reusing a single visual template
     * across distinct notification types), differentiated by `eventType`'s emails.json key
     * prefix. Respects the user's email preference — none of these events are account-critical.
     */
    async sendScheduleNotificationEmail(data: ScheduleNotificationEmailDto): Promise<void> {
      const language = data.language || LanguagePreference.en;
      await loadNamespaces(['emails']);

      const keyPrefixByEvent: Record<ScheduleNotificationEventType, string> = {
        ASSIGNMENT_REQUEST_RECEIVED: 'scheduleAssignmentRequestReceived',
        ASSIGNMENT_INVITE_RECEIVED: 'scheduleAssignmentInviteReceived',
        ASSIGNMENT_REQUEST_ACCEPTED: 'scheduleAssignmentRequestAccepted',
        ASSIGNMENT_REQUEST_DECLINED: 'scheduleAssignmentRequestDeclined',
        MONTHLY_CLOSE_OPEN_SLOTS: 'scheduleMonthlyCloseOpenSlots',
        MONTHLY_CLOSE_INCOMPLETE_AVAILABILITY: 'scheduleMonthlyCloseIncompleteAvailability',
        MONTHLY_CLOSE_AUTO_CONFIRMED: 'scheduleMonthlyCloseAutoConfirmed',
      };
      const keyPrefix = keyPrefixByEvent[data.eventType];
      const interpolation = { ns: 'emails', ...data.vars };

      const subject = translate(`${keyPrefix}.subject`, language, interpolation) || data.eventType;
      const templateData = {
        subject,
        greeting: translate('scheduleGreeting', language, { ns: 'emails', name: data.recipientName }) || `Hello ${data.recipientName},`,
        body: translate(`${keyPrefix}.body`, language, interpolation) || '',
        cta: translate('scheduleCta', language, { ns: 'emails' }) || 'Open Schedule',
        ctaUrl: data.ctaUrl,
        footer: translate('scheduleFooter', language, { ns: 'emails' }) || '',
      };

      await this.sendEmail(data.to, subject, 'schedule-notification', templateData);
    }
}