import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RolePermissionCountOrderByAggregateInput } from './role-permission-count-order-by-aggregate.input';
import { RolePermissionMaxOrderByAggregateInput } from './role-permission-max-order-by-aggregate.input';
import { RolePermissionMinOrderByAggregateInput } from './role-permission-min-order-by-aggregate.input';

@InputType()
export class RolePermissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    permission_id?: `${SortOrder}`;

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

    @Field(() => RolePermissionCountOrderByAggregateInput, {nullable:true})
    _count?: RolePermissionCountOrderByAggregateInput;

    @Field(() => RolePermissionMaxOrderByAggregateInput, {nullable:true})
    _max?: RolePermissionMaxOrderByAggregateInput;

    @Field(() => RolePermissionMinOrderByAggregateInput, {nullable:true})
    _min?: RolePermissionMinOrderByAggregateInput;
}
