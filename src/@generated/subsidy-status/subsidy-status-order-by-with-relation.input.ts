import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { SubsidyRequestOrderByRelationAggregateInput } from '../subsidy-request/subsidy-request-order-by-relation-aggregate.input';
import { SpecialProjectsOrderByRelationAggregateInput } from '../special-projects/special-projects-order-by-relation-aggregate.input';
import { SubsidyStatusHistoryOrderByRelationAggregateInput } from '../subsidy-status-history/subsidy-status-history-order-by-relation-aggregate.input';

@InputType()
export class SubsidyStatusOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    assigned_to?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

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

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    @Type(() => DepartmentOrderByWithRelationInput)
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    assigned_user?: UserOrderByWithRelationInput;

    @Field(() => SubsidyRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByRelationAggregateInput)
    subsidy_requests?: SubsidyRequestOrderByRelationAggregateInput;

    @Field(() => SpecialProjectsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsOrderByRelationAggregateInput)
    special_projects?: SpecialProjectsOrderByRelationAggregateInput;

    @Field(() => SubsidyStatusHistoryOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryOrderByRelationAggregateInput)
    history_as_current?: SubsidyStatusHistoryOrderByRelationAggregateInput;

    @Field(() => SubsidyStatusHistoryOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryOrderByRelationAggregateInput)
    history_as_previous?: SubsidyStatusHistoryOrderByRelationAggregateInput;
}
