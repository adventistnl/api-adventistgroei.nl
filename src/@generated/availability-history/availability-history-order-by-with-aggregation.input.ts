import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AvailabilityHistoryCountOrderByAggregateInput } from './availability-history-count-order-by-aggregate.input';
import { AvailabilityHistoryMaxOrderByAggregateInput } from './availability-history-max-order-by-aggregate.input';
import { AvailabilityHistoryMinOrderByAggregateInput } from './availability-history-min-order-by-aggregate.input';

@InputType()
export class AvailabilityHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    availability_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    field_name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    old_value?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    new_value?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    changed_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    changed_at?: `${SortOrder}`;

    @Field(() => AvailabilityHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: AvailabilityHistoryCountOrderByAggregateInput;

    @Field(() => AvailabilityHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: AvailabilityHistoryMaxOrderByAggregateInput;

    @Field(() => AvailabilityHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: AvailabilityHistoryMinOrderByAggregateInput;
}
