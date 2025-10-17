import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedInviteTokensWhereInput } from './used-invite-tokens-where.input';
import { Type } from 'class-transformer';
import { UsedInviteTokensOrderByWithAggregationInput } from './used-invite-tokens-order-by-with-aggregation.input';
import { UsedInviteTokensScalarFieldEnum } from './used-invite-tokens-scalar-field.enum';
import { UsedInviteTokensScalarWhereWithAggregatesInput } from './used-invite-tokens-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UsedInviteTokensCountAggregateInput } from './used-invite-tokens-count-aggregate.input';
import { UsedInviteTokensMinAggregateInput } from './used-invite-tokens-min-aggregate.input';
import { UsedInviteTokensMaxAggregateInput } from './used-invite-tokens-max-aggregate.input';

@ArgsType()
export class UsedInviteTokensGroupByArgs {

    @Field(() => UsedInviteTokensWhereInput, {nullable:true})
    @Type(() => UsedInviteTokensWhereInput)
    where?: UsedInviteTokensWhereInput;

    @Field(() => [UsedInviteTokensOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UsedInviteTokensOrderByWithAggregationInput>;

    @Field(() => [UsedInviteTokensScalarFieldEnum], {nullable:false})
    by!: Array<`${UsedInviteTokensScalarFieldEnum}`>;

    @Field(() => UsedInviteTokensScalarWhereWithAggregatesInput, {nullable:true})
    having?: UsedInviteTokensScalarWhereWithAggregatesInput;

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
