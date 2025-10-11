import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InstitutionCountOrderByAggregateInput } from './institution-count-order-by-aggregate.input';
import { InstitutionMaxOrderByAggregateInput } from './institution-max-order-by-aggregate.input';
import { InstitutionMinOrderByAggregateInput } from './institution-min-order-by-aggregate.input';

@InputType()
export class InstitutionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    denomination?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

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

    @Field(() => InstitutionCountOrderByAggregateInput, {nullable:true})
    _count?: InstitutionCountOrderByAggregateInput;

    @Field(() => InstitutionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstitutionMaxOrderByAggregateInput;

    @Field(() => InstitutionMinOrderByAggregateInput, {nullable:true})
    _min?: InstitutionMinOrderByAggregateInput;
}
