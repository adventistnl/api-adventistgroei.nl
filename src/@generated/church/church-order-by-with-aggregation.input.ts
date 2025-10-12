import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ChurchCountOrderByAggregateInput } from './church-count-order-by-aggregate.input';
import { ChurchMaxOrderByAggregateInput } from './church-max-order-by-aggregate.input';
import { ChurchMinOrderByAggregateInput } from './church-min-order-by-aggregate.input';

@InputType()
export class ChurchOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    region_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    contact_id?: SortOrderInput;

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

    @Field(() => ChurchCountOrderByAggregateInput, {nullable:true})
    _count?: ChurchCountOrderByAggregateInput;

    @Field(() => ChurchMaxOrderByAggregateInput, {nullable:true})
    _max?: ChurchMaxOrderByAggregateInput;

    @Field(() => ChurchMinOrderByAggregateInput, {nullable:true})
    _min?: ChurchMinOrderByAggregateInput;
}
