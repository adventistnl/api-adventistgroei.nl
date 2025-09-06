import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DirectMessageRecipientCountOrderByAggregateInput } from './direct-message-recipient-count-order-by-aggregate.input';
import { DirectMessageRecipientMaxOrderByAggregateInput } from './direct-message-recipient-max-order-by-aggregate.input';
import { DirectMessageRecipientMinOrderByAggregateInput } from './direct-message-recipient-min-order-by-aggregate.input';

@InputType()
export class DirectMessageRecipientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    direct_message_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipient_user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipient_role_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    read_at?: `${SortOrder}`;

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

    @Field(() => DirectMessageRecipientCountOrderByAggregateInput, {nullable:true})
    _count?: DirectMessageRecipientCountOrderByAggregateInput;

    @Field(() => DirectMessageRecipientMaxOrderByAggregateInput, {nullable:true})
    _max?: DirectMessageRecipientMaxOrderByAggregateInput;

    @Field(() => DirectMessageRecipientMinOrderByAggregateInput, {nullable:true})
    _min?: DirectMessageRecipientMinOrderByAggregateInput;
}
