import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { InviteUserDto } from 'src/dto/invite.dto';
import { InviteModel, ValidateOutputModel } from 'src/models/invite.model';
import { InviteService } from 'src/services';

@Resolver(() => InviteModel)
export class InviteResolver {
  constructor(private readonly inviteService: InviteService) {}

  @Mutation(() => InviteModel)
  async inviteUser(@Args('data') data: InviteUserDto): Promise<InviteModel> {
    return this.inviteService.inviteUser(data);
  }

  @Mutation(() => ValidateOutputModel)
  validateInviteToken(@Args('token') token: string): ValidateOutputModel {
    return this.inviteService.validateInviteToken(token);
  }
}
