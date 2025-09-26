import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { AnnualBudgetStatus } from '../prisma/annual-budget-status.enum';
import { InstitutionUncheckedCreateNestedManyWithoutAnnual_budgetInput } from '../institution/institution-unchecked-create-nested-many-without-annual-budget.input';
import { RegionUncheckedCreateNestedManyWithoutAnnual_budgetInput } from '../region/region-unchecked-create-nested-many-without-annual-budget.input';
import { ChurchUncheckedCreateNestedManyWithoutAnnual_budgetInput } from '../church/church-unchecked-create-nested-many-without-annual-budget.input';
import { DepartmentUncheckedCreateNestedManyWithoutAnnual_budget_refInput } from '../department/department-unchecked-create-nested-many-without-annual-budget-ref.input';

@InputType()
export class AnnualBudgetUncheckedCreateWithoutApproved_userInput {

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

    @Field(() => InstitutionUncheckedCreateNestedManyWithoutAnnual_budgetInput, {nullable:true})
    @Type(() => InstitutionUncheckedCreateNestedManyWithoutAnnual_budgetInput)
    institutions?: InstitutionUncheckedCreateNestedManyWithoutAnnual_budgetInput;

    @Field(() => RegionUncheckedCreateNestedManyWithoutAnnual_budgetInput, {nullable:true})
    @Type(() => RegionUncheckedCreateNestedManyWithoutAnnual_budgetInput)
    regions?: RegionUncheckedCreateNestedManyWithoutAnnual_budgetInput;

    @Field(() => ChurchUncheckedCreateNestedManyWithoutAnnual_budgetInput, {nullable:true})
    @Type(() => ChurchUncheckedCreateNestedManyWithoutAnnual_budgetInput)
    churches?: ChurchUncheckedCreateNestedManyWithoutAnnual_budgetInput;

    @Field(() => DepartmentUncheckedCreateNestedManyWithoutAnnual_budget_refInput, {nullable:true})
    @Type(() => DepartmentUncheckedCreateNestedManyWithoutAnnual_budget_refInput)
    departments?: DepartmentUncheckedCreateNestedManyWithoutAnnual_budget_refInput;
}
