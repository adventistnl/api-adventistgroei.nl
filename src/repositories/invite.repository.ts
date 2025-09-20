import { Injectable } from '@nestjs/common';
import { InviteModel, ValidateOutputModel } from 'src/models/invite.model';
import { JsonWebTokenError, JwtService } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import { InviteUserDto } from 'src/dto/invite.dto';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
@Injectable()
export class InviteRepository {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}
  private readonly BASE_URL = process.env.FRONTEND_BASE_URL;

  async inviteUser(data: InviteUserDto): Promise<InviteModel> {
    await this.userRepository.findById(data.inviter_id);
      
    const token = this.jwtService.sign({ ...data }, { expiresIn: '2d', algorithm: 'HS256' });
    const url = `${this.BASE_URL}/register?invite=${token}`;

    return { token, url };
  }

  validateInviteToken(token: string): ValidateOutputModel {
    try {
      const decodedToken = this.jwtService.verify<ValidateOutputModel>(token);
      const payload: ValidateOutputModel = {
        inviter_id: decodedToken.inviter_id,
        email: decodedToken.email,
        institution_id: decodedToken.institution_id,
        role_ids: decodedToken.role_ids,
        language_preference: decodedToken.language_preference,
      };
      return payload;
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new CustomGraphQLError(`Invalid token: ${error.message}`, ErrorCode.BAD_REQUEST, 400);
      } else {
        throw new CustomGraphQLError(`Invalid token`, ErrorCode.BAD_REQUEST, 400);
      }
    }
  }
}