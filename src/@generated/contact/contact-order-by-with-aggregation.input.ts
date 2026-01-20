import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ContactCountOrderByAggregateInput } from './contact-count-order-by-aggregate.input';
import { ContactMaxOrderByAggregateInput } from './contact-max-order-by-aggregate.input';
import { ContactMinOrderByAggregateInput } from './contact-min-order-by-aggregate.input';

@InputType()
export class ContactOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mobile?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    country?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    city?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    state?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    full_address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    postal_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    website?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    is_primary?: `${SortOrder}`;

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

    @Field(() => ContactCountOrderByAggregateInput, {nullable:true})
    _count?: ContactCountOrderByAggregateInput;

    @Field(() => ContactMaxOrderByAggregateInput, {nullable:true})
    _max?: ContactMaxOrderByAggregateInput;

    @Field(() => ContactMinOrderByAggregateInput, {nullable:true})
    _min?: ContactMinOrderByAggregateInput;
}
