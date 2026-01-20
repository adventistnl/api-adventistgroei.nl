import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FundingPoliciesCountOrderByAggregateInput } from './funding-policies-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { FundingPoliciesAvgOrderByAggregateInput } from './funding-policies-avg-order-by-aggregate.input';
import { FundingPoliciesMaxOrderByAggregateInput } from './funding-policies-max-order-by-aggregate.input';
import { FundingPoliciesMinOrderByAggregateInput } from './funding-policies-min-order-by-aggregate.input';
import { FundingPoliciesSumOrderByAggregateInput } from './funding-policies-sum-order-by-aggregate.input';

@InputType()
export class FundingPoliciesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    max_percent?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    annual_cap?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    year?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => FundingPoliciesCountOrderByAggregateInput, {nullable:true})
    @Type(() => FundingPoliciesCountOrderByAggregateInput)
    _count?: FundingPoliciesCountOrderByAggregateInput;

    @Field(() => FundingPoliciesAvgOrderByAggregateInput, {nullable:true})
    @Type(() => FundingPoliciesAvgOrderByAggregateInput)
    _avg?: FundingPoliciesAvgOrderByAggregateInput;

    @Field(() => FundingPoliciesMaxOrderByAggregateInput, {nullable:true})
    @Type(() => FundingPoliciesMaxOrderByAggregateInput)
    _max?: FundingPoliciesMaxOrderByAggregateInput;

    @Field(() => FundingPoliciesMinOrderByAggregateInput, {nullable:true})
    @Type(() => FundingPoliciesMinOrderByAggregateInput)
    _min?: FundingPoliciesMinOrderByAggregateInput;

    @Field(() => FundingPoliciesSumOrderByAggregateInput, {nullable:true})
    @Type(() => FundingPoliciesSumOrderByAggregateInput)
    _sum?: FundingPoliciesSumOrderByAggregateInput;
}
