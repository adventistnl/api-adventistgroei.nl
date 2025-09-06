import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserRoleCountOrderByAggregateInput } from './user-role-count-order-by-aggregate.input';
import { UserRoleMaxOrderByAggregateInput } from './user-role-max-order-by-aggregate.input';
import { UserRoleMinOrderByAggregateInput } from './user-role-min-order-by-aggregate.input';

@InputType()
export class UserRoleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role_id?: `${SortOrder}`;

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

    @Field(() => UserRoleCountOrderByAggregateInput, {nullable:true})
    _count?: UserRoleCountOrderByAggregateInput;

    @Field(() => UserRoleMaxOrderByAggregateInput, {nullable:true})
    _max?: UserRoleMaxOrderByAggregateInput;

    @Field(() => UserRoleMinOrderByAggregateInput, {nullable:true})
    _min?: UserRoleMinOrderByAggregateInput;
}
