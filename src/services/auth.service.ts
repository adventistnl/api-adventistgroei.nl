import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { LoginInput } from '../dto/auth.dto';
import { AuthModel } from '../models/auth.model';
import { UserWithRoles } from 'src/models';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { translate } from '../../i18n.config';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';

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
    const user = await this.userService.findByEmail(email.toLowerCase());
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
    const lang = (Object.values(LanguagePreference).includes(input.lang as LanguagePreference)
      ? input.lang
      : LanguagePreference.en) as LanguagePreference;

    const user = await this.userService.findByEmail(input.email.toLowerCase());

    if (!user) {
      throw new CustomGraphQLError(
        translate('login.email_not_found', lang, { ns: 'auth' }),
        ErrorCode.AUTHENTICATION_ERROR,
        401,
        { additional: { field: 'email' } },
      );
    }

    if (!user.password) {
      throw new CustomGraphQLError(
        translate('login.account_no_password', lang, { ns: 'auth' }),
        ErrorCode.AUTHENTICATION_ERROR,
        401,
        { additional: { field: 'email' } },
      );
    }

    const bcrypt = await import('bcryptjs');
    const isValid = await bcrypt.compare(input.password, user.password);

    if (!isValid) {
      throw new CustomGraphQLError(
        translate('login.invalid_password', lang, { ns: 'auth' }),
        ErrorCode.AUTHENTICATION_ERROR,
        401,
        { additional: { field: 'password' } },
      );
    }

    const { password, ...userWithoutPassword } = user;
    const userRoles = user.user_roles.map(ur => ur.key_code);
    const payload = { sub: user.id, email: user.email, userRoles };
    return {
      accessToken: this.jwtService.sign(payload, { expiresIn: '30d' }),
      expiresIn: 2592000, // 30 dias em segundos
      user: {...userWithoutPassword, password: ''},
    };
  }
}
