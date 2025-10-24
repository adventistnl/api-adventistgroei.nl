import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { PermissionOrderByWithRelationInput } from '../permission/permission-order-by-with-relation.input';

@InputType()
export class RolePermissionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    permission_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_essential?: `${SortOrder}`;

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

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => PermissionOrderByWithRelationInput, {nullable:true})
    permission?: PermissionOrderByWithRelationInput;
}
