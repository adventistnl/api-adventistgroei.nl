import { Injectable } from '@nestjs/common';
import { InviteModel } from 'src/models/invite.model';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import { InviteUserDto } from 'src/dto/invite.dto';

@Injectable()
export class InviteRepository {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}
  private readonly BASE_URL = process.env.FRONTEND_BASE_URL;

  async inviteUser(data: InviteUserDto): Promise<InviteModel> {
    await this.userRepository.findById(data.inviter_id);
    const token = this.jwtService.sign({ ...data }, { expiresIn: '2d' });
    const url = `${this.BASE_URL}/register?token=${token}`;
    return { token, url };
  }
}