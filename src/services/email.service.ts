import { Injectable } from '@nestjs/common';
import { InviteEmailDto } from 'src/dto/email.dto';
import { SendgridEmailRepository } from '../repositories/emails/sendgrid.repository';
import { NodemailerEmailRepository } from 'src/repositories/emails/nodemailer.repository';

@Injectable()
export class EmailService {
  constructor(
    private readonly sendgridEmailRepository: SendgridEmailRepository,
    private readonly nodemailerRepository: NodemailerEmailRepository
  ) {}

  async sendInviteEmail(data: InviteEmailDto): Promise<void> {
    // await this.sendgridEmailRepository.sendInviteEmail(data);
    await this.nodemailerRepository.sendInviteEmail(data);
  }
}
