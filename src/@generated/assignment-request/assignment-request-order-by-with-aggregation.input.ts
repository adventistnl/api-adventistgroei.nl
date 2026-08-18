import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AssignmentRequestCountOrderByAggregateInput } from './assignment-request-count-order-by-aggregate.input';
import { AssignmentRequestMaxOrderByAggregateInput } from './assignment-request-max-order-by-aggregate.input';
import { AssignmentRequestMinOrderByAggregateInput } from './assignment-request-min-order-by-aggregate.input';

@InputType()
export class AssignmentRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    church_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    date?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    template_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    decided_at?: SortOrderInput;

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

    @Field(() => AssignmentRequestCountOrderByAggregateInput, {nullable:true})
    _count?: AssignmentRequestCountOrderByAggregateInput;

    @Field(() => AssignmentRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: AssignmentRequestMaxOrderByAggregateInput;

    @Field(() => AssignmentRequestMinOrderByAggregateInput, {nullable:true})
    _min?: AssignmentRequestMinOrderByAggregateInput;
}
