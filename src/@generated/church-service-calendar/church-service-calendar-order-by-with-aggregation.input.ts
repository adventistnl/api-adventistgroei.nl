import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChurchServiceCalendarCountOrderByAggregateInput } from './church-service-calendar-count-order-by-aggregate.input';
import { ChurchServiceCalendarMaxOrderByAggregateInput } from './church-service-calendar-max-order-by-aggregate.input';
import { ChurchServiceCalendarMinOrderByAggregateInput } from './church-service-calendar-min-order-by-aggregate.input';

@InputType()
export class ChurchServiceCalendarOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    church_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    date?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    has_service?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: `${SortOrder}`;

    @Field(() => ChurchServiceCalendarCountOrderByAggregateInput, {nullable:true})
    _count?: ChurchServiceCalendarCountOrderByAggregateInput;

    @Field(() => ChurchServiceCalendarMaxOrderByAggregateInput, {nullable:true})
    _max?: ChurchServiceCalendarMaxOrderByAggregateInput;

    @Field(() => ChurchServiceCalendarMinOrderByAggregateInput, {nullable:true})
    _min?: ChurchServiceCalendarMinOrderByAggregateInput;
}
