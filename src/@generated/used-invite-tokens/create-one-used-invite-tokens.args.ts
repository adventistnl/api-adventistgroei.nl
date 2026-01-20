import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedInviteTokensCreateInput } from './used-invite-tokens-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUsedInviteTokensArgs {

    @Field(() => UsedInviteTokensCreateInput, {nullable:false})
    @Type(() => UsedInviteTokensCreateInput)
    data!: UsedInviteTokensCreateInput;
}
