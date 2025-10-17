import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsedTokensCountOrderByAggregateInput } from './used-tokens-count-order-by-aggregate.input';
import { UsedTokensMaxOrderByAggregateInput } from './used-tokens-max-order-by-aggregate.input';
import { UsedTokensMinOrderByAggregateInput } from './used-tokens-min-order-by-aggregate.input';

@InputType()
export class UsedTokensOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    usedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tokenExpiresAt?: `${SortOrder}`;

    @Field(() => UsedTokensCountOrderByAggregateInput, {nullable:true})
    _count?: UsedTokensCountOrderByAggregateInput;

    @Field(() => UsedTokensMaxOrderByAggregateInput, {nullable:true})
    _max?: UsedTokensMaxOrderByAggregateInput;

    @Field(() => UsedTokensMinOrderByAggregateInput, {nullable:true})
    _min?: UsedTokensMinOrderByAggregateInput;
}
