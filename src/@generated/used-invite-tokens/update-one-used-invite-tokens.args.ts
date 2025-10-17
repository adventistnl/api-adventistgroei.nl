import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedInviteTokensUpdateInput } from './used-invite-tokens-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UsedInviteTokensWhereUniqueInput } from './used-invite-tokens-where-unique.input';

@ArgsType()
export class UpdateOneUsedInviteTokensArgs {

    @Field(() => UsedInviteTokensUpdateInput, {nullable:false})
    @Type(() => UsedInviteTokensUpdateInput)
    data!: UsedInviteTokensUpdateInput;

    @Field(() => UsedInviteTokensWhereUniqueInput, {nullable:false})
    @Type(() => UsedInviteTokensWhereUniqueInput)
    where!: Prisma.AtLeast<UsedInviteTokensWhereUniqueInput, 'id' | 'token'>;
}
