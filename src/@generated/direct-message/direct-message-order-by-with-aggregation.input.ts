import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DirectMessageCountOrderByAggregateInput } from './direct-message-count-order-by-aggregate.input';
import { DirectMessageMaxOrderByAggregateInput } from './direct-message-max-order-by-aggregate.input';
import { DirectMessageMinOrderByAggregateInput } from './direct-message-min-order-by-aggregate.input';

@InputType()
export class DirectMessageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sender_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sent_at?: `${SortOrder}`;

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

    @Field(() => DirectMessageCountOrderByAggregateInput, {nullable:true})
    _count?: DirectMessageCountOrderByAggregateInput;

    @Field(() => DirectMessageMaxOrderByAggregateInput, {nullable:true})
    _max?: DirectMessageMaxOrderByAggregateInput;

    @Field(() => DirectMessageMinOrderByAggregateInput, {nullable:true})
    _min?: DirectMessageMinOrderByAggregateInput;
}
