import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AvailabilityRecurrenceRuleCountOrderByAggregateInput } from './availability-recurrence-rule-count-order-by-aggregate.input';
import { AvailabilityRecurrenceRuleAvgOrderByAggregateInput } from './availability-recurrence-rule-avg-order-by-aggregate.input';
import { AvailabilityRecurrenceRuleMaxOrderByAggregateInput } from './availability-recurrence-rule-max-order-by-aggregate.input';
import { AvailabilityRecurrenceRuleMinOrderByAggregateInput } from './availability-recurrence-rule-min-order-by-aggregate.input';
import { AvailabilityRecurrenceRuleSumOrderByAggregateInput } from './availability-recurrence-rule-sum-order-by-aggregate.input';

@InputType()
export class AvailabilityRecurrenceRuleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    day_of_week?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    start_date?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    end_date?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    effective_from?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    effective_until?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    note?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => AvailabilityRecurrenceRuleCountOrderByAggregateInput, {nullable:true})
    _count?: AvailabilityRecurrenceRuleCountOrderByAggregateInput;

    @Field(() => AvailabilityRecurrenceRuleAvgOrderByAggregateInput, {nullable:true})
    _avg?: AvailabilityRecurrenceRuleAvgOrderByAggregateInput;

    @Field(() => AvailabilityRecurrenceRuleMaxOrderByAggregateInput, {nullable:true})
    _max?: AvailabilityRecurrenceRuleMaxOrderByAggregateInput;

    @Field(() => AvailabilityRecurrenceRuleMinOrderByAggregateInput, {nullable:true})
    _min?: AvailabilityRecurrenceRuleMinOrderByAggregateInput;

    @Field(() => AvailabilityRecurrenceRuleSumOrderByAggregateInput, {nullable:true})
    _sum?: AvailabilityRecurrenceRuleSumOrderByAggregateInput;
}
