import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { LoginInput } from '../dto/auth.dto';
import { AuthModel } from '../models/auth.model';
import { UserWithRoles } from 'src/models';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<UserWithRoles, 'password'> | null> {
    const user = await this.userService.findByEmail(email);
    if (!user) return null;
    if (!user.password) return null
    const bcrypt = await import('bcryptjs');
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(input: LoginInput): Promise<AuthModel> {
    const user = await this.userService.findByEmail(input.email);
    if (!user) throw new CustomGraphQLError('Invalid credentials', ErrorCode.UNAUTHORIZED, 401);
    if (!user.password) throw new CustomGraphQLError('Invalid credentials', ErrorCode.UNAUTHORIZED, 401);
    const bcrypt = await import('bcryptjs');
    const isValid = await bcrypt.compare(input.password, user.password);
    if (!isValid) throw new CustomGraphQLError('Invalid credentials', ErrorCode.UNAUTHORIZED, 401);

    // Remover o campo password explicitamente
    const { password, ...userWithoutPassword } = user;
    const payload = { sub: user.id, email: user.email };
    return {
      accessToken: this.jwtService.sign(payload, { expiresIn: '30d' }),
      expiresIn: 2592000, // 30 dias em segundos
      user: {...userWithoutPassword, password: ''},
    };
  }
}
