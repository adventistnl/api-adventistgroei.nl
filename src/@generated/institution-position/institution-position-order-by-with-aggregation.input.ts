import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InstitutionPositionCountOrderByAggregateInput } from './institution-position-count-order-by-aggregate.input';
import { InstitutionPositionMaxOrderByAggregateInput } from './institution-position-max-order-by-aggregate.input';
import { InstitutionPositionMinOrderByAggregateInput } from './institution-position-min-order-by-aggregate.input';

@InputType()
export class InstitutionPositionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    position_type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

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

    @Field(() => InstitutionPositionCountOrderByAggregateInput, {nullable:true})
    _count?: InstitutionPositionCountOrderByAggregateInput;

    @Field(() => InstitutionPositionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstitutionPositionMaxOrderByAggregateInput;

    @Field(() => InstitutionPositionMinOrderByAggregateInput, {nullable:true})
    _min?: InstitutionPositionMinOrderByAggregateInput;
}
