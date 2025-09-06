import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DirectMessageOrderByWithRelationInput } from '../direct-message/direct-message-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';

@InputType()
export class DirectMessageRecipientOrderByWithRelationInput {

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

    @Field(() => DirectMessageOrderByWithRelationInput, {nullable:true})
    direct_message?: DirectMessageOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    recipient_user?: UserOrderByWithRelationInput;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    recipient_role?: RoleOrderByWithRelationInput;
}
