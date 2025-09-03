import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from '../services/auth.service';
import { LoginInput } from '../dto/auth.dto';
import { AuthModel } from '../models/auth.model';

@Resolver(() => AuthModel)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthModel)
  async login(@Args('input') input: LoginInput): Promise<AuthModel> {
    return this.authService.login(input);
  }
}
