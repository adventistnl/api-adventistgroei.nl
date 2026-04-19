import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { ChurchOrderByWithRelationInput } from '../church/church-order-by-with-relation.input';
import { VoluntariesOnProjectsOrderByRelationAggregateInput } from '../voluntaries-on-projects/voluntaries-on-projects-order-by-relation-aggregate.input';
import { ProjectActivityOrderByRelationAggregateInput } from '../project-activity/project-activity-order-by-relation-aggregate.input';
import { SubsidyRequestOrderByRelationAggregateInput } from '../subsidy-request/subsidy-request-order-by-relation-aggregate.input';
import { SpecialProjectsOrderByRelationAggregateInput } from '../special-projects/special-projects-order-by-relation-aggregate.input';
import { ProjectHistoryOrderByRelationAggregateInput } from '../project-history/project-history-order-by-relation-aggregate.input';
import { BudgetTransactionOrderByRelationAggregateInput } from '../budget-transaction/budget-transaction-order-by-relation-aggregate.input';

@InputType()
export class ProjectOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    church_department_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidized_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    balance?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    owner_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    co_owner_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_private?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    required_volunteers?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    start_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    end_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deadline?: SortOrderInput;

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

    @Field(() => SortOrderInput, {nullable:true})
    event_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    institution_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    church_id?: SortOrderInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    @Type(() => DepartmentOrderByWithRelationInput)
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    @Type(() => DepartmentOrderByWithRelationInput)
    church_department?: DepartmentOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    owner?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    co_owner?: UserOrderByWithRelationInput;

    @Field(() => EventOrderByWithRelationInput, {nullable:true})
    @Type(() => EventOrderByWithRelationInput)
    event?: EventOrderByWithRelationInput;

    @Field(() => InstitutionOrderByWithRelationInput, {nullable:true})
    @Type(() => InstitutionOrderByWithRelationInput)
    Institution?: InstitutionOrderByWithRelationInput;

    @Field(() => ChurchOrderByWithRelationInput, {nullable:true})
    @Type(() => ChurchOrderByWithRelationInput)
    church?: ChurchOrderByWithRelationInput;

    @Field(() => VoluntariesOnProjectsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsOrderByRelationAggregateInput)
    voluntary_users?: VoluntariesOnProjectsOrderByRelationAggregateInput;

    @Field(() => ProjectActivityOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectActivityOrderByRelationAggregateInput)
    activities?: ProjectActivityOrderByRelationAggregateInput;

    @Field(() => SubsidyRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByRelationAggregateInput)
    subsidies?: SubsidyRequestOrderByRelationAggregateInput;

    @Field(() => SpecialProjectsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsOrderByRelationAggregateInput)
    special_projects?: SpecialProjectsOrderByRelationAggregateInput;

    @Field(() => ProjectHistoryOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectHistoryOrderByRelationAggregateInput)
    history?: ProjectHistoryOrderByRelationAggregateInput;

    @Field(() => BudgetTransactionOrderByRelationAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionOrderByRelationAggregateInput)
    budget_transactions?: BudgetTransactionOrderByRelationAggregateInput;
}
