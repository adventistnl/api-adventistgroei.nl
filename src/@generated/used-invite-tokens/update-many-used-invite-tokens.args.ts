import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedInviteTokensUpdateManyMutationInput } from './used-invite-tokens-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UsedInviteTokensWhereInput } from './used-invite-tokens-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyUsedInviteTokensArgs {

    @Field(() => UsedInviteTokensUpdateManyMutationInput, {nullable:false})
    @Type(() => UsedInviteTokensUpdateManyMutationInput)
    data!: UsedInviteTokensUpdateManyMutationInput;

    @Field(() => UsedInviteTokensWhereInput, {nullable:true})
    @Type(() => UsedInviteTokensWhereInput)
    where?: UsedInviteTokensWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
