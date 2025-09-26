import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutDepartmentsInput } from './annual-budget-create-without-departments.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutDepartmentsInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutDepartmentsInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutDepartmentsInput)
    create!: AnnualBudgetCreateWithoutDepartmentsInput;
}
