import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutDepartmentInput } from './annual-budget-create-without-department.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutDepartmentInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutDepartmentInput)
    create!: AnnualBudgetCreateWithoutDepartmentInput;
}
