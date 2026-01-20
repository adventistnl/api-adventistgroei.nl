import { Injectable } from '@nestjs/common';
import { InviteUserDto } from 'src/dto/invite.dto';
import { InviteModel, ValidateOutputModel } from 'src/models/invite.model';
import { InviteRepository } from 'src/repositories/invite.repository';

@Injectable()
export class InviteService {
  constructor(
    private readonly inviteRepository: InviteRepository,
  ) {}

  async inviteUser(
    data: InviteUserDto,
  ): Promise<InviteModel> {
    const res = await this.inviteRepository.inviteUser(data);
    return res;
  }

  async validateInviteToken(token: string): Promise<ValidateOutputModel> {
    const payload = await this.inviteRepository.validateInviteToken(token);
    return payload;
  }
}
