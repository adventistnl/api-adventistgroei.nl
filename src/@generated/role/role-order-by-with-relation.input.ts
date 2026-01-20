import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserRoleOrderByRelationAggregateInput } from '../user-role/user-role-order-by-relation-aggregate.input';
import { RolePermissionOrderByRelationAggregateInput } from '../role-permission/role-permission-order-by-relation-aggregate.input';
import { DirectMessageRecipientOrderByRelationAggregateInput } from '../direct-message-recipient/direct-message-recipient-order-by-relation-aggregate.input';

@InputType()
export class RoleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    color?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    key_code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_fixed?: `${SortOrder}`;

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

    @Field(() => UserRoleOrderByRelationAggregateInput, {nullable:true})
    user_roles?: UserRoleOrderByRelationAggregateInput;

    @Field(() => RolePermissionOrderByRelationAggregateInput, {nullable:true})
    role_permissions?: RolePermissionOrderByRelationAggregateInput;

    @Field(() => DirectMessageRecipientOrderByRelationAggregateInput, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientOrderByRelationAggregateInput;
}
