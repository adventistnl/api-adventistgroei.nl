import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AssignmentCountOrderByAggregateInput } from './assignment-count-order-by-aggregate.input';
import { AssignmentMaxOrderByAggregateInput } from './assignment-max-order-by-aggregate.input';
import { AssignmentMinOrderByAggregateInput } from './assignment-min-order-by-aggregate.input';

@InputType()
export class AssignmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    church_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    date?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    user_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    origin?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    locked_at?: SortOrderInput;

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

    @Field(() => AssignmentCountOrderByAggregateInput, {nullable:true})
    _count?: AssignmentCountOrderByAggregateInput;

    @Field(() => AssignmentMaxOrderByAggregateInput, {nullable:true})
    _max?: AssignmentMaxOrderByAggregateInput;

    @Field(() => AssignmentMinOrderByAggregateInput, {nullable:true})
    _min?: AssignmentMinOrderByAggregateInput;
}
