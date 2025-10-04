import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActivityFundingCountOrderByAggregateInput } from './activity-funding-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { ActivityFundingAvgOrderByAggregateInput } from './activity-funding-avg-order-by-aggregate.input';
import { ActivityFundingMaxOrderByAggregateInput } from './activity-funding-max-order-by-aggregate.input';
import { ActivityFundingMinOrderByAggregateInput } from './activity-funding-min-order-by-aggregate.input';
import { ActivityFundingSumOrderByAggregateInput } from './activity-funding-sum-order-by-aggregate.input';

@InputType()
export class ActivityFundingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    activity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_contribution_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_contribution_percent?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    validated?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => ActivityFundingCountOrderByAggregateInput, {nullable:true})
    @Type(() => ActivityFundingCountOrderByAggregateInput)
    _count?: ActivityFundingCountOrderByAggregateInput;

    @Field(() => ActivityFundingAvgOrderByAggregateInput, {nullable:true})
    @Type(() => ActivityFundingAvgOrderByAggregateInput)
    _avg?: ActivityFundingAvgOrderByAggregateInput;

    @Field(() => ActivityFundingMaxOrderByAggregateInput, {nullable:true})
    @Type(() => ActivityFundingMaxOrderByAggregateInput)
    _max?: ActivityFundingMaxOrderByAggregateInput;

    @Field(() => ActivityFundingMinOrderByAggregateInput, {nullable:true})
    @Type(() => ActivityFundingMinOrderByAggregateInput)
    _min?: ActivityFundingMinOrderByAggregateInput;

    @Field(() => ActivityFundingSumOrderByAggregateInput, {nullable:true})
    @Type(() => ActivityFundingSumOrderByAggregateInput)
    _sum?: ActivityFundingSumOrderByAggregateInput;
}
