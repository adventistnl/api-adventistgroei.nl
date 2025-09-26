import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { InstitutionOrderByRelationAggregateInput } from '../institution/institution-order-by-relation-aggregate.input';
import { RegionOrderByRelationAggregateInput } from '../region/region-order-by-relation-aggregate.input';
import { ChurchOrderByRelationAggregateInput } from '../church/church-order-by-relation-aggregate.input';
import { DepartmentOrderByRelationAggregateInput } from '../department/department-order-by-relation-aggregate.input';

@InputType()
export class AnnualBudgetOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    year?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    planned_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    total_expenses?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    balance?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approved_by?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    approved_user?: UserOrderByWithRelationInput;

    @Field(() => InstitutionOrderByRelationAggregateInput, {nullable:true})
    @Type(() => InstitutionOrderByRelationAggregateInput)
    institutions?: InstitutionOrderByRelationAggregateInput;

    @Field(() => RegionOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RegionOrderByRelationAggregateInput)
    regions?: RegionOrderByRelationAggregateInput;

    @Field(() => ChurchOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ChurchOrderByRelationAggregateInput)
    churches?: ChurchOrderByRelationAggregateInput;

    @Field(() => DepartmentOrderByRelationAggregateInput, {nullable:true})
    @Type(() => DepartmentOrderByRelationAggregateInput)
    departments?: DepartmentOrderByRelationAggregateInput;
}
