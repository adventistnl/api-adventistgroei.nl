import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { AnnualBudgetStatus } from '../prisma/annual-budget-status.enum';
import { AnnualBudgetPriority } from '../prisma/annual-budget-priority.enum';
import { AnnualBudgetCategory } from '../prisma/annual-budget-category.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { AnnualBudgetEntityType } from '../prisma/annual-budget-entity-type.enum';
import { User } from '../user/user.model';
import { Institution } from '../institution/institution.model';
import { Church } from '../church/church.model';
import { Department } from '../department/department.model';
import { BudgetTransaction } from '../budget-transaction/budget-transaction.model';
import { BudgetTransfer } from '../budget-transfer/budget-transfer.model';
import { AnnualBudgetCount } from './annual-budget-count.output';

@ObjectType()
export class AnnualBudget {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    planned_budget!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    total_expenses!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    balance!: Decimal;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    justification!: string | null;

    @Field(() => String, {nullable:true})
    approved_by!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => AnnualBudgetStatus, {defaultValue:'DRAFT',nullable:false})
    status!: `${AnnualBudgetStatus}`;

    @Field(() => String, {nullable:true})
    institution_id!: string | null;

    @Field(() => String, {nullable:true})
    church_id!: string | null;

    @Field(() => String, {nullable:true})
    department_id!: string | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    allocated_amount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    approved_amount!: Decimal | null;

    @Field(() => String, {nullable:false})
    requested_by!: string;

    @Field(() => String, {nullable:true})
    reviewed_by!: string | null;

    @Field(() => Date, {nullable:false})
    submitted_date!: Date;

    @Field(() => Date, {nullable:true})
    review_date!: Date | null;

    @Field(() => Date, {nullable:true})
    approval_date!: Date | null;

    @Field(() => AnnualBudgetPriority, {defaultValue:'MEDIUM',nullable:false})
    priority!: `${AnnualBudgetPriority}`;

    @Field(() => AnnualBudgetCategory, {defaultValue:'OPERATIONAL',nullable:false})
    category!: `${AnnualBudgetCategory}`;

    @Field(() => GraphQLJSON, {nullable:true})
    documents!: any | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_locked!: boolean;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    has_budget_record!: boolean;

    @Field(() => AnnualBudgetEntityType, {nullable:false})
    entity_type!: `${AnnualBudgetEntityType}`;

    @Field(() => User, {nullable:true})
    approved_user?: User | null;

    @Field(() => Institution, {nullable:true})
    institution?: Institution | null;

    @Field(() => Church, {nullable:true})
    church?: Church | null;

    @Field(() => Department, {nullable:true})
    department?: Department | null;

    @Field(() => [BudgetTransaction], {nullable:true})
    transactions?: Array<BudgetTransaction>;

    @Field(() => [BudgetTransfer], {nullable:true})
    transfers_out?: Array<BudgetTransfer>;

    @Field(() => [BudgetTransfer], {nullable:true})
    transfers_in?: Array<BudgetTransfer>;

    @Field(() => AnnualBudgetCount, {nullable:false})
    _count?: AnnualBudgetCount;
}
