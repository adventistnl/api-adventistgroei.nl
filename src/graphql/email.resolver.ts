import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { EmailService } from 'src/services/email.service';

@Resolver()
export class EmailResolver {
  constructor(private readonly emailService: EmailService) {}

  @Mutation(() => Boolean, { description: 'Send an invitation email' })
  async sendInviteEmail(
    @Args('to') to: string,
    @Args('inviter_id') inviter_id: string,
    @Args('url') url: string,
  ): Promise<boolean> {
      await this.emailService.sendInviteEmail(to, inviter_id, url);
      return true;
  }
}
