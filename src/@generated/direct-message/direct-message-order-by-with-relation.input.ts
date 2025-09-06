import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DirectMessageRecipientOrderByRelationAggregateInput } from '../direct-message-recipient/direct-message-recipient-order-by-relation-aggregate.input';

@InputType()
export class DirectMessageOrderByWithRelationInput {

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

    @Field(() => InstitutionOrderByWithRelationInput, {nullable:true})
    @Type(() => InstitutionOrderByWithRelationInput)
    institution?: InstitutionOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    sender?: UserOrderByWithRelationInput;

    @Field(() => DirectMessageRecipientOrderByRelationAggregateInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientOrderByRelationAggregateInput;
}
