import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import { loadNamespaces } from 'i18next';
import { translate } from 'i18n.config';

import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { InviteEmailDto } from 'src/dto/email.dto';
import { UserService } from '../../services/user.service';
import { MustacheService } from '../../services/mustache.service';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';

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
    const body = data.message || this.getTranslation('body', language);
    const greeting = this.getTranslation('greeting', language, { inviterName: inviter.name });

    const templateData = {
      url: data.url,
      body,
      subject,
      greeting,
      cta: this.getTranslation('cta', language),
      expiry: this.getTranslation('expiry', language),
      ignore: this.getTranslation('ignore', language),
      footer: this.getTranslation('footer', language),
    };
    await this.sendEmail(data.to, subject, 'invite-user', templateData);
  }

  async sendEmail(to: string, subject: string, templateName: string, templateData: Record<string, any>): Promise<void> {
    try {
      // Load and render the template
      const html: string = this.mustacheService.renderMustacheTemplate(templateName, templateData);
      // Send the email
      await this.transporter.sendMail({
        from: this.nodemailerEmail, // Sender address
        to, // List of receivers
        subject, // Subject line
        html, // HTML body content
      });
    } catch (error) {
      console.error('Error sending email:', error);
      throw new CustomGraphQLError('Failed to send email', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
  }
}