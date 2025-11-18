import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { AnnualBudgetStatus } from '../prisma/annual-budget-status.enum';
import { AnnualBudgetPriority } from '../prisma/annual-budget-priority.enum';
import { AnnualBudgetCategory } from '../prisma/annual-budget-category.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { AnnualBudgetEntityType } from '../prisma/annual-budget-entity-type.enum';
import { AnnualBudgetCountAggregate } from './annual-budget-count-aggregate.output';
import { AnnualBudgetAvgAggregate } from './annual-budget-avg-aggregate.output';
import { AnnualBudgetSumAggregate } from './annual-budget-sum-aggregate.output';
import { AnnualBudgetMinAggregate } from './annual-budget-min-aggregate.output';
import { AnnualBudgetMaxAggregate } from './annual-budget-max-aggregate.output';

@ObjectType()
export class AnnualBudgetGroupBy {

    @Field(() => String, {nullable:false})
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
    notes?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    justification?: string;

    @Field(() => String, {nullable:true})
    approved_by?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => AnnualBudgetStatus, {nullable:false})
    status!: `${AnnualBudgetStatus}`;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    church_id?: string;

    @Field(() => String, {nullable:true})
    department_id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    requested_amount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    approved_amount?: Decimal;

    @Field(() => String, {nullable:false})
    requested_by!: string;

    @Field(() => String, {nullable:true})
    reviewed_by?: string;

    @Field(() => Date, {nullable:false})
    submitted_date!: Date | string;

    @Field(() => Date, {nullable:true})
    review_date?: Date | string;

    @Field(() => Date, {nullable:true})
    approval_date?: Date | string;

    @Field(() => AnnualBudgetPriority, {nullable:false})
    priority!: `${AnnualBudgetPriority}`;

    @Field(() => AnnualBudgetCategory, {nullable:false})
    category!: `${AnnualBudgetCategory}`;

    @Field(() => GraphQLJSON, {nullable:true})
    documents?: any;

    @Field(() => Boolean, {nullable:false})
    is_locked!: boolean;

    @Field(() => Boolean, {nullable:false})
    has_budget_record!: boolean;

    @Field(() => AnnualBudgetEntityType, {nullable:false})
    entity_type!: `${AnnualBudgetEntityType}`;

    @Field(() => AnnualBudgetCountAggregate, {nullable:true})
    _count?: AnnualBudgetCountAggregate;

    @Field(() => AnnualBudgetAvgAggregate, {nullable:true})
    _avg?: AnnualBudgetAvgAggregate;

    @Field(() => AnnualBudgetSumAggregate, {nullable:true})
    _sum?: AnnualBudgetSumAggregate;

    @Field(() => AnnualBudgetMinAggregate, {nullable:true})
    _min?: AnnualBudgetMinAggregate;

    @Field(() => AnnualBudgetMaxAggregate, {nullable:true})
    _max?: AnnualBudgetMaxAggregate;
}
