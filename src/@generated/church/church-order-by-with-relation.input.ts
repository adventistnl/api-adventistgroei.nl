import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { RegionOrderByWithRelationInput } from '../region/region-order-by-with-relation.input';
import { ContactOrderByWithRelationInput } from '../contact/contact-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DepartmentOrderByRelationAggregateInput } from '../department/department-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { SubsidyRequestOrderByRelationAggregateInput } from '../subsidy-request/subsidy-request-order-by-relation-aggregate.input';
import { AnnualBudgetOrderByRelationAggregateInput } from '../annual-budget/annual-budget-order-by-relation-aggregate.input';
import { ProjectOrderByRelationAggregateInput } from '../project/project-order-by-relation-aggregate.input';

@InputType()
export class ChurchOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    region_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contact_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    leader_id?: `${SortOrder}`;

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

    @Field(() => RegionOrderByWithRelationInput, {nullable:true})
    region?: RegionOrderByWithRelationInput;

    @Field(() => ContactOrderByWithRelationInput, {nullable:true})
    @Type(() => ContactOrderByWithRelationInput)
    contact?: ContactOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    leader?: UserOrderByWithRelationInput;

    @Field(() => DepartmentOrderByRelationAggregateInput, {nullable:true})
    @Type(() => DepartmentOrderByRelationAggregateInput)
    departments?: DepartmentOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    @Type(() => UserOrderByRelationAggregateInput)
    users?: UserOrderByRelationAggregateInput;

    @Field(() => SubsidyRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByRelationAggregateInput)
    subsidy_requests?: SubsidyRequestOrderByRelationAggregateInput;

    @Field(() => AnnualBudgetOrderByRelationAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetOrderByRelationAggregateInput)
    annual_budgets?: AnnualBudgetOrderByRelationAggregateInput;

    @Field(() => ProjectOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectOrderByRelationAggregateInput)
    projects?: ProjectOrderByRelationAggregateInput;
}
