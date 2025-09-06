import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventRecipientCountOrderByAggregateInput } from './event-recipient-count-order-by-aggregate.input';
import { EventRecipientMaxOrderByAggregateInput } from './event-recipient-max-order-by-aggregate.input';
import { EventRecipientMinOrderByAggregateInput } from './event-recipient-min-order-by-aggregate.input';

@InputType()
export class EventRecipientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    event_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_id?: `${SortOrder}`;

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

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => EventRecipientCountOrderByAggregateInput, {nullable:true})
    _count?: EventRecipientCountOrderByAggregateInput;

    @Field(() => EventRecipientMaxOrderByAggregateInput, {nullable:true})
    _max?: EventRecipientMaxOrderByAggregateInput;

    @Field(() => EventRecipientMinOrderByAggregateInput, {nullable:true})
    _min?: EventRecipientMinOrderByAggregateInput;
}
