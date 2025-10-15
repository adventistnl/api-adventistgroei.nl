import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';
import { loadNamespaces } from 'i18next';
import { translate } from 'i18n.config';

import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { InviteEmailDto } from 'src/dto/email.dto';
import { UserService } from '../../services/user.service';
import { MustacheService } from '../../services/mustache.service';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';

@Injectable()
export class SendgridEmailRepository {
  constructor(
    private readonly userService: UserService,
    private readonly mustacheService: MustacheService
  ) {
    const apiKey: string = process.env.SENDGRID_API_KEY || '';
    if (!apiKey) {
      throw new Error('SENDGRID_API_KEY is not defined in the environment variables');
    }
    sgMail.setApiKey(apiKey);
  }
  sendgridEmail: string = process.env.SENDGRID_EMAIL || '';
  
  private getTranslation(key: string, lng: LanguagePreference, options?: Record<string, any>): string {
    return translate(`invite.${key}`, lng, { ns: 'emails', ...options }) || '';
  }

  async sendInviteEmail(data: InviteEmailDto): Promise<void> {
    console.log('Using SendGrid Email:', this.sendgridEmail);
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
      await sgMail.send({
        to,
        from: this.sendgridEmail, // Replace with your verified sender
        subject,
        html,
      });
    } catch (error) {
      console.error('Error sending email:', error);
      throw new CustomGraphQLError('Failed to send email', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
  }
}
