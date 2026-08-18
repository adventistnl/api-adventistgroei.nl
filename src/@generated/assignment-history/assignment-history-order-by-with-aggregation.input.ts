import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AssignmentHistoryCountOrderByAggregateInput } from './assignment-history-count-order-by-aggregate.input';
import { AssignmentHistoryMaxOrderByAggregateInput } from './assignment-history-max-order-by-aggregate.input';
import { AssignmentHistoryMinOrderByAggregateInput } from './assignment-history-min-order-by-aggregate.input';

@InputType()
export class AssignmentHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    assignment_id?: `${SortOrder}`;

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

    @Field(() => AssignmentHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: AssignmentHistoryCountOrderByAggregateInput;

    @Field(() => AssignmentHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: AssignmentHistoryMaxOrderByAggregateInput;

    @Field(() => AssignmentHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: AssignmentHistoryMinOrderByAggregateInput;
}
