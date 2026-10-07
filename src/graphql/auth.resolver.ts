import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from '../services/auth.service';
import { LoginInput } from '../dto/auth.dto';
import { AuthModel } from '../models/auth.model';
import { ContextDto } from '../dto/context.dto';

@Resolver(() => AuthModel)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthModel)
  async login(
    @Args('input') input: LoginInput,
    @Context() context: ContextDto,
  ): Promise<AuthModel> {
    const authResult = await this.authService.login(input);
    
    if (context.res) {
      context.res.cookie('auth-token', authResult.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: authResult.expiresIn * 1000, // milissegundos
        path: '/',
      });
    }

    return authResult;
  }

  @Mutation(() => Boolean)
  async logout(
    @Context() context: ContextDto,
  ): Promise<boolean> {
    if (context.res) {
      context.res.cookie('auth-token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 0, // Expira imediatamente
        path: '/',
      });
    }
    return true;
  }
}
