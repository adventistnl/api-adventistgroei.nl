import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventRegistrationCountOrderByAggregateInput } from './event-registration-count-order-by-aggregate.input';
import { EventRegistrationMaxOrderByAggregateInput } from './event-registration-max-order-by-aggregate.input';
import { EventRegistrationMinOrderByAggregateInput } from './event-registration-min-order-by-aggregate.input';

@InputType()
export class EventRegistrationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    event_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

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

    @Field(() => EventRegistrationCountOrderByAggregateInput, {nullable:true})
    _count?: EventRegistrationCountOrderByAggregateInput;

    @Field(() => EventRegistrationMaxOrderByAggregateInput, {nullable:true})
    _max?: EventRegistrationMaxOrderByAggregateInput;

    @Field(() => EventRegistrationMinOrderByAggregateInput, {nullable:true})
    _min?: EventRegistrationMinOrderByAggregateInput;
}
