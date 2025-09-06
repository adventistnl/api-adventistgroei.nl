import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventCountOrderByAggregateInput } from './event-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { EventAvgOrderByAggregateInput } from './event-avg-order-by-aggregate.input';
import { EventMaxOrderByAggregateInput } from './event-max-order-by-aggregate.input';
import { EventMinOrderByAggregateInput } from './event-min-order-by-aggregate.input';
import { EventSumOrderByAggregateInput } from './event-sum-order-by-aggregate.input';

@InputType()
export class EventOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_type?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    target_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contact_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    max_participants?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ticket_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subscription_expires_at?: `${SortOrder}`;

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

    @Field(() => EventCountOrderByAggregateInput, {nullable:true})
    @Type(() => EventCountOrderByAggregateInput)
    _count?: EventCountOrderByAggregateInput;

    @Field(() => EventAvgOrderByAggregateInput, {nullable:true})
    @Type(() => EventAvgOrderByAggregateInput)
    _avg?: EventAvgOrderByAggregateInput;

    @Field(() => EventMaxOrderByAggregateInput, {nullable:true})
    @Type(() => EventMaxOrderByAggregateInput)
    _max?: EventMaxOrderByAggregateInput;

    @Field(() => EventMinOrderByAggregateInput, {nullable:true})
    @Type(() => EventMinOrderByAggregateInput)
    _min?: EventMinOrderByAggregateInput;

    @Field(() => EventSumOrderByAggregateInput, {nullable:true})
    @Type(() => EventSumOrderByAggregateInput)
    _sum?: EventSumOrderByAggregateInput;
}
