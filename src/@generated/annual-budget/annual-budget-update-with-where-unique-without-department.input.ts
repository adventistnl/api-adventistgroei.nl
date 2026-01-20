import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutDepartmentInput } from './annual-budget-update-without-department.input';

@InputType()
export class AnnualBudgetUpdateWithWhereUniqueWithoutDepartmentInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutDepartmentInput)
    data!: AnnualBudgetUpdateWithoutDepartmentInput;
}
