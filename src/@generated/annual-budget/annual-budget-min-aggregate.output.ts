import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { AnnualBudgetStatus } from '../prisma/annual-budget-status.enum';
import { AnnualBudgetPriority } from '../prisma/annual-budget-priority.enum';
import { AnnualBudgetCategory } from '../prisma/annual-budget-category.enum';
import { AnnualBudgetEntityType } from '../prisma/annual-budget-entity-type.enum';

@ObjectType()
export class AnnualBudgetMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    planned_budget?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    total_expenses?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    balance?: Decimal;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    justification?: string;

    @Field(() => String, {nullable:true})
    approved_by?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => AnnualBudgetStatus, {nullable:true})
    status?: `${AnnualBudgetStatus}`;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    church_id?: string;

    @Field(() => String, {nullable:true})
    department_id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    allocated_amount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    approved_amount?: Decimal;

    @Field(() => String, {nullable:true})
    requested_by?: string;

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

    @Field(() => Boolean, {nullable:true})
    is_locked?: boolean;

    @Field(() => Boolean, {nullable:true})
    has_budget_record?: boolean;

    @Field(() => AnnualBudgetEntityType, {nullable:true})
    entity_type?: `${AnnualBudgetEntityType}`;
}
