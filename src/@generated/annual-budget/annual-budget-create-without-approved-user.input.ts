import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { AnnualBudgetStatus } from '../prisma/annual-budget-status.enum';
import { InstitutionCreateNestedManyWithoutAnnual_budgetInput } from '../institution/institution-create-nested-many-without-annual-budget.input';
import { RegionCreateNestedManyWithoutAnnual_budgetInput } from '../region/region-create-nested-many-without-annual-budget.input';
import { ChurchCreateNestedManyWithoutAnnual_budgetInput } from '../church/church-create-nested-many-without-annual-budget.input';
import { DepartmentCreateNestedManyWithoutAnnual_budgetInput } from '../department/department-create-nested-many-without-annual-budget.input';

@InputType()
export class AnnualBudgetCreateWithoutApproved_userInput {

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

    @Field(() => AnnualBudgetStatus, {nullable:true})
    status?: `${AnnualBudgetStatus}`;

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

    @Field(() => InstitutionCreateNestedManyWithoutAnnual_budgetInput, {nullable:true})
    @Type(() => InstitutionCreateNestedManyWithoutAnnual_budgetInput)
    institutions?: InstitutionCreateNestedManyWithoutAnnual_budgetInput;

    @Field(() => RegionCreateNestedManyWithoutAnnual_budgetInput, {nullable:true})
    @Type(() => RegionCreateNestedManyWithoutAnnual_budgetInput)
    regions?: RegionCreateNestedManyWithoutAnnual_budgetInput;

    @Field(() => ChurchCreateNestedManyWithoutAnnual_budgetInput, {nullable:true})
    @Type(() => ChurchCreateNestedManyWithoutAnnual_budgetInput)
    churches?: ChurchCreateNestedManyWithoutAnnual_budgetInput;

    @Field(() => DepartmentCreateNestedManyWithoutAnnual_budgetInput, {nullable:true})
    @Type(() => DepartmentCreateNestedManyWithoutAnnual_budgetInput)
    departments?: DepartmentCreateNestedManyWithoutAnnual_budgetInput;
}
