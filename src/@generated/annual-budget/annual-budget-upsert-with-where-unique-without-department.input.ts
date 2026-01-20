import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutDepartmentInput } from './annual-budget-update-without-department.input';
import { AnnualBudgetCreateWithoutDepartmentInput } from './annual-budget-create-without-department.input';

@InputType()
export class AnnualBudgetUpsertWithWhereUniqueWithoutDepartmentInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutDepartmentInput)
    update!: AnnualBudgetUpdateWithoutDepartmentInput;

    @Field(() => AnnualBudgetCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutDepartmentInput)
    create!: AnnualBudgetCreateWithoutDepartmentInput;
}
