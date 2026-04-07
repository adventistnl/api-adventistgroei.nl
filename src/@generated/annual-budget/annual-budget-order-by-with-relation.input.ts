import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { ChurchOrderByWithRelationInput } from '../church/church-order-by-with-relation.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { BudgetTransactionOrderByRelationAggregateInput } from '../budget-transaction/budget-transaction-order-by-relation-aggregate.input';
import { BudgetTransferOrderByRelationAggregateInput } from '../budget-transfer/budget-transfer-order-by-relation-aggregate.input';

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
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    justification?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approved_by?: SortOrderInput;

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

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    institution_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    church_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    department_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    allocated_amount?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    approved_amount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    requested_by?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    reviewed_by?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    submitted_date?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    review_date?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approval_date?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    priority?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    category?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    documents?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    is_locked?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    has_budget_record?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_type?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    approved_user?: UserOrderByWithRelationInput;

    @Field(() => InstitutionOrderByWithRelationInput, {nullable:true})
    @Type(() => InstitutionOrderByWithRelationInput)
    institution?: InstitutionOrderByWithRelationInput;

    @Field(() => ChurchOrderByWithRelationInput, {nullable:true})
    @Type(() => ChurchOrderByWithRelationInput)
    church?: ChurchOrderByWithRelationInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    @Type(() => DepartmentOrderByWithRelationInput)
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => BudgetTransactionOrderByRelationAggregateInput, {nullable:true})
    @Type(() => BudgetTransactionOrderByRelationAggregateInput)
    transactions?: BudgetTransactionOrderByRelationAggregateInput;

    @Field(() => BudgetTransferOrderByRelationAggregateInput, {nullable:true})
    @Type(() => BudgetTransferOrderByRelationAggregateInput)
    transfers_out?: BudgetTransferOrderByRelationAggregateInput;

    @Field(() => BudgetTransferOrderByRelationAggregateInput, {nullable:true})
    @Type(() => BudgetTransferOrderByRelationAggregateInput)
    transfers_in?: BudgetTransferOrderByRelationAggregateInput;
}
