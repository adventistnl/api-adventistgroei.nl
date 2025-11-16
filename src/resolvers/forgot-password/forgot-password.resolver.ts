import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ForgotPasswordService } from '../../services/forgot-password/forgot-password.service';
import { SendCodeInput, VerifyCodeInput, ResetPasswordInput } from './dto/forgot-password.input';
import { ForgotPasswordResponse } from './dto/forgot-password.response';

@Resolver()
export class ForgotPasswordResolver {
  constructor(private readonly forgotPasswordService: ForgotPasswordService) {}

  @Mutation(() => ForgotPasswordResponse)
  async sendForgotPasswordCode(@Args('input') input: SendCodeInput) {
    return this.forgotPasswordService.sendCode(input);
  }

  @Mutation(() => ForgotPasswordResponse)
  async verifyForgotPasswordCode(@Args('input') input: VerifyCodeInput) {
    return this.forgotPasswordService.verifyCode(input);
  }

  @Mutation(() => ForgotPasswordResponse)
  async resetPassword(@Args('input') input: ResetPasswordInput) {
    return this.forgotPasswordService.resetPassword(input);
  }
}
