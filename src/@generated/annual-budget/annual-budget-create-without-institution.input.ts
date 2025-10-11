import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { AnnualBudgetStatus } from '../prisma/annual-budget-status.enum';
import { UserCreateNestedOneWithoutApproved_annual_budgetsInput } from '../user/user-create-nested-one-without-approved-annual-budgets.input';
import { RegionCreateNestedOneWithoutAnnual_budgetsInput } from '../region/region-create-nested-one-without-annual-budgets.input';
import { ChurchCreateNestedOneWithoutAnnual_budgetsInput } from '../church/church-create-nested-one-without-annual-budgets.input';
import { DepartmentCreateNestedOneWithoutAnnual_budgetsInput } from '../department/department-create-nested-one-without-annual-budgets.input';

@InputType()
export class AnnualBudgetCreateWithoutInstitutionInput {

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

    @Field(() => UserCreateNestedOneWithoutApproved_annual_budgetsInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutApproved_annual_budgetsInput)
    approved_user?: UserCreateNestedOneWithoutApproved_annual_budgetsInput;

    @Field(() => RegionCreateNestedOneWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => RegionCreateNestedOneWithoutAnnual_budgetsInput)
    region?: RegionCreateNestedOneWithoutAnnual_budgetsInput;

    @Field(() => ChurchCreateNestedOneWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => ChurchCreateNestedOneWithoutAnnual_budgetsInput)
    church?: ChurchCreateNestedOneWithoutAnnual_budgetsInput;

    @Field(() => DepartmentCreateNestedOneWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => DepartmentCreateNestedOneWithoutAnnual_budgetsInput)
    department?: DepartmentCreateNestedOneWithoutAnnual_budgetsInput;
}
