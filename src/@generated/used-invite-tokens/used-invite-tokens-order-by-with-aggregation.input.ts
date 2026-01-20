import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsedInviteTokensCountOrderByAggregateInput } from './used-invite-tokens-count-order-by-aggregate.input';
import { UsedInviteTokensMaxOrderByAggregateInput } from './used-invite-tokens-max-order-by-aggregate.input';
import { UsedInviteTokensMinOrderByAggregateInput } from './used-invite-tokens-min-order-by-aggregate.input';

@InputType()
export class UsedInviteTokensOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    usedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tokenExpiresAt?: `${SortOrder}`;

    @Field(() => UsedInviteTokensCountOrderByAggregateInput, {nullable:true})
    _count?: UsedInviteTokensCountOrderByAggregateInput;

    @Field(() => UsedInviteTokensMaxOrderByAggregateInput, {nullable:true})
    _max?: UsedInviteTokensMaxOrderByAggregateInput;

    @Field(() => UsedInviteTokensMinOrderByAggregateInput, {nullable:true})
    _min?: UsedInviteTokensMinOrderByAggregateInput;
}
