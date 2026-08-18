import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AvailabilityCountOrderByAggregateInput } from './availability-count-order-by-aggregate.input';
import { AvailabilityMaxOrderByAggregateInput } from './availability-max-order-by-aggregate.input';
import { AvailabilityMinOrderByAggregateInput } from './availability-min-order-by-aggregate.input';

@InputType()
export class AvailabilityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    date?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    recurrence_rule_id?: SortOrderInput;

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

    @Field(() => AvailabilityCountOrderByAggregateInput, {nullable:true})
    _count?: AvailabilityCountOrderByAggregateInput;

    @Field(() => AvailabilityMaxOrderByAggregateInput, {nullable:true})
    _max?: AvailabilityMaxOrderByAggregateInput;

    @Field(() => AvailabilityMinOrderByAggregateInput, {nullable:true})
    _min?: AvailabilityMinOrderByAggregateInput;
}
