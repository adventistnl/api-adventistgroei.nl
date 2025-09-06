import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommunicationCountOrderByAggregateInput } from './communication-count-order-by-aggregate.input';
import { CommunicationMaxOrderByAggregateInput } from './communication-max-order-by-aggregate.input';
import { CommunicationMinOrderByAggregateInput } from './communication-min-order-by-aggregate.input';

@InputType()
export class CommunicationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    priority?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    schedule_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    published_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    author_id?: `${SortOrder}`;

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

    @Field(() => CommunicationCountOrderByAggregateInput, {nullable:true})
    _count?: CommunicationCountOrderByAggregateInput;

    @Field(() => CommunicationMaxOrderByAggregateInput, {nullable:true})
    _max?: CommunicationMaxOrderByAggregateInput;

    @Field(() => CommunicationMinOrderByAggregateInput, {nullable:true})
    _min?: CommunicationMinOrderByAggregateInput;
}
