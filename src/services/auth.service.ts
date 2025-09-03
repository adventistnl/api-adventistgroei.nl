import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { LoginInput } from '../dto/auth.dto';
import { AuthModel } from '../models/auth.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findByEmail(email);
    if (!user) return null;
    const bcrypt = await import('bcryptjs');
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(input: LoginInput): Promise<AuthModel> {
    const user = await this.userService.findByEmail(input.email);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const bcrypt = await import('bcryptjs');
    const isValid = await bcrypt.compare(input.password, user.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }
    const payload = { sub: user.id, email: user.email };
      return {
        accessToken: this.jwtService.sign(payload, { expiresIn: '30d' }),
        expiresIn: 2592000, // 30 dias em segundos
      };
  }
}
