import { Injectable } from '@nestjs/common';
import { InviteModel, ValidateOutputModel } from 'src/models/invite.model';
import { JsonWebTokenError, JwtService } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import { InviteUserDto } from 'src/dto/invite.dto';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class InviteRepository {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly prisma: PrismaService 
  ) {}
  private readonly BASE_URL = process.env.FRONTEND_BASE_URL;

  async inviteUser(data: InviteUserDto): Promise<InviteModel> {
    await this.userRepository.findById(data.inviter_id);

    const invitedUser = await this.userRepository.findOneByFilters({email: data.email})

    if (invitedUser) throw new CustomGraphQLError(`Email already in use`, ErrorCode.CONFLICT, 409);
      
    const token = this.jwtService.sign({ ...data }, { expiresIn: '30d', algorithm: 'HS256' });
    const url = `${this.BASE_URL}/register?invite=${token}`;

    return { token, url };
  }

  async validateInviteToken(token: string): Promise<ValidateOutputModel> {
    try {
      const usedToken = await this.prisma.usedInviteTokens.findUnique({
        where: { token },
      })

      if (usedToken) {
        throw new CustomGraphQLError('Token was already used.', ErrorCode.UNAUTHORIZED, 401);
      }

      const decodedToken = this.jwtService.verify<ValidateOutputModel>(token);

      const payload: ValidateOutputModel = {
        inviter_id: decodedToken.inviter_id,
        email: decodedToken.email,
        institution_id: decodedToken.institution_id,
        role_ids: decodedToken.role_ids,
        language_preference: decodedToken.language_preference,
        exp: decodedToken.exp
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