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

  validateInviteToken(token: string): ValidateOutputModel {
    const payload = this.inviteRepository.validateInviteToken(token);
    return payload;
  }
}
