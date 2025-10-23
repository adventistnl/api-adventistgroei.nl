import { Injectable } from '@nestjs/common';
import { InviteEmailDto } from '../dto/email.dto';
import { NodemailerEmailRepository } from '../repositories/emails/nodemailer.repository';

@Injectable()
export class EmailService {
  constructor(
    private readonly nodemailerRepository: NodemailerEmailRepository
  ) {}

  async sendInviteEmail(data: InviteEmailDto): Promise<void> {
    // await this.sendgridEmailRepository.sendInviteEmail(data);
    await this.nodemailerRepository.sendInviteEmail(data);
  } 
}
