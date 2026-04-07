import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { AnnualBudgetStatus } from '../prisma/annual-budget-status.enum';
import { AnnualBudgetPriority } from '../prisma/annual-budget-priority.enum';
import { AnnualBudgetCategory } from '../prisma/annual-budget-category.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { AnnualBudgetEntityType } from '../prisma/annual-budget-entity-type.enum';
import { UserCreateNestedOneWithoutApproved_annual_budgetsInput } from '../user/user-create-nested-one-without-approved-annual-budgets.input';
import { InstitutionCreateNestedOneWithoutAnnual_budgetsInput } from '../institution/institution-create-nested-one-without-annual-budgets.input';
import { ChurchCreateNestedOneWithoutAnnual_budgetsInput } from '../church/church-create-nested-one-without-annual-budgets.input';
import { DepartmentCreateNestedOneWithoutAnnual_budgetsInput } from '../department/department-create-nested-one-without-annual-budgets.input';
import { BudgetTransactionCreateNestedManyWithoutAnnual_budgetInput } from '../budget-transaction/budget-transaction-create-nested-many-without-annual-budget.input';
import { BudgetTransferCreateNestedManyWithoutFrom_budgetInput } from '../budget-transfer/budget-transfer-create-nested-many-without-from-budget.input';
import { BudgetTransferCreateNestedManyWithoutTo_budgetInput } from '../budget-transfer/budget-transfer-create-nested-many-without-to-budget.input';

@InputType()
export class AnnualBudgetCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    planned_budget!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    total_expenses!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    balance!: Decimal;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    justification?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => AnnualBudgetStatus, {nullable:true})
    status?: `${AnnualBudgetStatus}`;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    allocated_amount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    approved_amount?: Decimal;

    @Field(() => String, {nullable:false})
    requested_by!: string;

    @Field(() => String, {nullable:true})
    reviewed_by?: string;

    @Field(() => Date, {nullable:true})
    submitted_date?: Date | string;

    @Field(() => Date, {nullable:true})
    review_date?: Date | string;

    @Field(() => Date, {nullable:true})
    approval_date?: Date | string;

    @Field(() => AnnualBudgetPriority, {nullable:true})
    priority?: `${AnnualBudgetPriority}`;

    @Field(() => AnnualBudgetCategory, {nullable:true})
    category?: `${AnnualBudgetCategory}`;

    @Field(() => GraphQLJSON, {nullable:true})
    documents?: any;

    @Field(() => Boolean, {nullable:true})
    is_locked?: boolean;

    @Field(() => Boolean, {nullable:true})
    has_budget_record?: boolean;

    @Field(() => AnnualBudgetEntityType, {nullable:false})
    entity_type!: `${AnnualBudgetEntityType}`;

    @Field(() => UserCreateNestedOneWithoutApproved_annual_budgetsInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutApproved_annual_budgetsInput)
    approved_user?: UserCreateNestedOneWithoutApproved_annual_budgetsInput;

    @Field(() => InstitutionCreateNestedOneWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => InstitutionCreateNestedOneWithoutAnnual_budgetsInput)
    institution?: InstitutionCreateNestedOneWithoutAnnual_budgetsInput;

    @Field(() => ChurchCreateNestedOneWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => ChurchCreateNestedOneWithoutAnnual_budgetsInput)
    church?: ChurchCreateNestedOneWithoutAnnual_budgetsInput;

    @Field(() => DepartmentCreateNestedOneWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => DepartmentCreateNestedOneWithoutAnnual_budgetsInput)
    department?: DepartmentCreateNestedOneWithoutAnnual_budgetsInput;

    @Field(() => BudgetTransactionCreateNestedManyWithoutAnnual_budgetInput, {nullable:true})
    @Type(() => BudgetTransactionCreateNestedManyWithoutAnnual_budgetInput)
    transactions?: BudgetTransactionCreateNestedManyWithoutAnnual_budgetInput;

    @Field(() => BudgetTransferCreateNestedManyWithoutFrom_budgetInput, {nullable:true})
    @Type(() => BudgetTransferCreateNestedManyWithoutFrom_budgetInput)
    transfers_out?: BudgetTransferCreateNestedManyWithoutFrom_budgetInput;

    @Field(() => BudgetTransferCreateNestedManyWithoutTo_budgetInput, {nullable:true})
    @Type(() => BudgetTransferCreateNestedManyWithoutTo_budgetInput)
    transfers_in?: BudgetTransferCreateNestedManyWithoutTo_budgetInput;
}
