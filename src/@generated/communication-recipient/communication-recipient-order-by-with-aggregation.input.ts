import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommunicationRecipientCountOrderByAggregateInput } from './communication-recipient-count-order-by-aggregate.input';
import { CommunicationRecipientMaxOrderByAggregateInput } from './communication-recipient-max-order-by-aggregate.input';
import { CommunicationRecipientMinOrderByAggregateInput } from './communication-recipient-min-order-by-aggregate.input';

@InputType()
export class CommunicationRecipientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    communication_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_type?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    target_id?: SortOrderInput;

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

    @Field(() => CommunicationRecipientCountOrderByAggregateInput, {nullable:true})
    _count?: CommunicationRecipientCountOrderByAggregateInput;

    @Field(() => CommunicationRecipientMaxOrderByAggregateInput, {nullable:true})
    _max?: CommunicationRecipientMaxOrderByAggregateInput;

    @Field(() => CommunicationRecipientMinOrderByAggregateInput, {nullable:true})
    _min?: CommunicationRecipientMinOrderByAggregateInput;
}
