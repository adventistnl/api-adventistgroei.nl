import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubsidyRequestOrderByWithRelationInput } from '../subsidy-request/subsidy-request-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { SubsidyStatusOrderByWithRelationInput } from '../subsidy-status/subsidy-status-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class SubsidyStatusHistoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidy_request_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    previous_status_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    reason?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    changed_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    changed_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => SubsidyRequestOrderByWithRelationInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByWithRelationInput)
    subsidy_request?: SubsidyRequestOrderByWithRelationInput;

    @Field(() => SubsidyStatusOrderByWithRelationInput, {nullable:true})
    @Type(() => SubsidyStatusOrderByWithRelationInput)
    status?: SubsidyStatusOrderByWithRelationInput;

    @Field(() => SubsidyStatusOrderByWithRelationInput, {nullable:true})
    @Type(() => SubsidyStatusOrderByWithRelationInput)
    previous_status?: SubsidyStatusOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;
}
