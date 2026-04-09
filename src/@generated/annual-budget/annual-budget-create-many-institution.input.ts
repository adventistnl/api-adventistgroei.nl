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

@InputType()
export class AnnualBudgetCreateManyInstitutionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    planned_budget!: Decimal;

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

    @Field(() => String, {nullable:true})
    church_id?: string;

    @Field(() => String, {nullable:true})
    department_id?: string;

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
}
