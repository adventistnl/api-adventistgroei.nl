import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { InviteEmailDto } from 'src/dto/email.dto';
import { EmailService } from 'src/services/email.service';

@Resolver()
export class EmailResolver {
  constructor(private readonly emailService: EmailService) {}

  @Mutation(() => Boolean, { description: 'Send an invitation email' })
  async sendInviteEmail(
    @Args('data') data: InviteEmailDto,
  ): Promise<boolean> {
      await this.emailService.sendInviteEmail(data);
      return true;
  }
}
