import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { EmailVerificationService } from '../../services/email-verification.service';
import { SendEmailVerificationCodeInput, VerifyEmailCodeInput } from './dto/email-verification.input';
import { EmailVerificationResponse } from './dto/email-verification.response';

@Resolver()
export class EmailVerificationResolver {
  constructor(private readonly emailVerificationService: EmailVerificationService) {}

  @Query(() => EmailVerificationResponse)
  async checkEmailAvailability(
    @Args('email') email: string,
  ): Promise<EmailVerificationResponse> {
    return this.emailVerificationService.checkEmailAvailability(email);
  }

  @Mutation(() => EmailVerificationResponse)
  async sendEmailVerificationCode(
    @Args('input') input: SendEmailVerificationCodeInput,
  ): Promise<EmailVerificationResponse> {
    return this.emailVerificationService.sendCode({
      email: input.email,
      userName: input.userName,
      language: input.language,
    });
  }

  @Mutation(() => EmailVerificationResponse)
  async verifyEmailRegistrationCode(
    @Args('input') input: VerifyEmailCodeInput,
  ): Promise<EmailVerificationResponse> {
    return this.emailVerificationService.verifyCode({
      email: input.email,
      code: input.code,
    });
  }
}
