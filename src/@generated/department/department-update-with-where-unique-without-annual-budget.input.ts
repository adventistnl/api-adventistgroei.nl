import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutAnnual_budgetInput } from './department-update-without-annual-budget.input';

@InputType()
export class DepartmentUpdateWithWhereUniqueWithoutAnnual_budgetInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutAnnual_budgetInput)
    data!: DepartmentUpdateWithoutAnnual_budgetInput;
}
