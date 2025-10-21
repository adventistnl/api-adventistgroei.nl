import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RegionCountOrderByAggregateInput } from './region-count-order-by-aggregate.input';
import { RegionMaxOrderByAggregateInput } from './region-max-order-by-aggregate.input';
import { RegionMinOrderByAggregateInput } from './region-min-order-by-aggregate.input';

@InputType()
export class RegionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

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

    @Field(() => RegionCountOrderByAggregateInput, {nullable:true})
    _count?: RegionCountOrderByAggregateInput;

    @Field(() => RegionMaxOrderByAggregateInput, {nullable:true})
    _max?: RegionMaxOrderByAggregateInput;

    @Field(() => RegionMinOrderByAggregateInput, {nullable:true})
    _min?: RegionMinOrderByAggregateInput;
}
