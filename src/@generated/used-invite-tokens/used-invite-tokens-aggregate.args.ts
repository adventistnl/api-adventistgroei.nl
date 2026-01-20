import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedInviteTokensWhereInput } from './used-invite-tokens-where.input';
import { Type } from 'class-transformer';
import { UsedInviteTokensOrderByWithRelationInput } from './used-invite-tokens-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UsedInviteTokensWhereUniqueInput } from './used-invite-tokens-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsedInviteTokensCountAggregateInput } from './used-invite-tokens-count-aggregate.input';
import { UsedInviteTokensMinAggregateInput } from './used-invite-tokens-min-aggregate.input';
import { UsedInviteTokensMaxAggregateInput } from './used-invite-tokens-max-aggregate.input';

@ArgsType()
export class UsedInviteTokensAggregateArgs {

    @Field(() => UsedInviteTokensWhereInput, {nullable:true})
    @Type(() => UsedInviteTokensWhereInput)
    where?: UsedInviteTokensWhereInput;

    @Field(() => [UsedInviteTokensOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsedInviteTokensOrderByWithRelationInput>;

    @Field(() => UsedInviteTokensWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UsedInviteTokensWhereUniqueInput, 'id' | 'token'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UsedInviteTokensCountAggregateInput, {nullable:true})
    _count?: UsedInviteTokensCountAggregateInput;

    @Field(() => UsedInviteTokensMinAggregateInput, {nullable:true})
    _min?: UsedInviteTokensMinAggregateInput;

    @Field(() => UsedInviteTokensMaxAggregateInput, {nullable:true})
    _max?: UsedInviteTokensMaxAggregateInput;
}
