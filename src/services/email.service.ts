import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';
import { render } from 'mustache';
import * as fs from 'fs';
import * as path from 'path';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { UserService } from './user.service';
import { InviteEmailDto } from 'src/dto/email.dto';

@Injectable()
export class EmailService {
  constructor(
    private readonly userService: UserService
  ) {
    const apiKey: string = process.env.SENDGRID_API_KEY || '';
    if (!apiKey) {
      throw new Error('SENDGRID_API_KEY is not defined in the environment variables');
    }
    sgMail.setApiKey(apiKey);
  }
  sendgridEmail: string = process.env.SENDGRID_EMAIL || '';

  async sendInviteEmail(data: InviteEmailDto): Promise<void> {
    const inviter = await this.userService.getUserById(data.inviter_id);
    if (!inviter) throw new CustomGraphQLError('Inviter not found', ErrorCode.NOT_FOUND, 404);

    const subject = 'Invitation to Adventist Groei';
    const templateData = {
      inviterName: inviter.name,
      url: data.url,
      message: data.message,
    };
    await this.sendEmail(data.to, subject, 'invite-user', templateData);
  }
  
  renderMustacheTemplate(templateName: string, vars: { [x: string]: any }): string {
    const templatePath = path.resolve(process.cwd(), 'src/views/mustache', `${templateName}.html.mustache`);
    const template = fs.readFileSync(templatePath, 'utf-8');
    return render(template, vars);
  }

  async sendEmail(to: string, subject: string, templateName: string, templateData: Record<string, any>): Promise<void> {
    try {
      // Load and render the template
      const html: string = this.renderMustacheTemplate(templateName, templateData);
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
