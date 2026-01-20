import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UsedInviteTokensWhereUniqueInput } from './used-invite-tokens-where-unique.input';
import { Type } from 'class-transformer';
import { UsedInviteTokensCreateInput } from './used-invite-tokens-create.input';
import { UsedInviteTokensUpdateInput } from './used-invite-tokens-update.input';

@ArgsType()
export class UpsertOneUsedInviteTokensArgs {

    @Field(() => UsedInviteTokensWhereUniqueInput, {nullable:false})
    @Type(() => UsedInviteTokensWhereUniqueInput)
    where!: Prisma.AtLeast<UsedInviteTokensWhereUniqueInput, 'id' | 'token'>;

    @Field(() => UsedInviteTokensCreateInput, {nullable:false})
    @Type(() => UsedInviteTokensCreateInput)
    create!: UsedInviteTokensCreateInput;

    @Field(() => UsedInviteTokensUpdateInput, {nullable:false})
    @Type(() => UsedInviteTokensUpdateInput)
    update!: UsedInviteTokensUpdateInput;
}
