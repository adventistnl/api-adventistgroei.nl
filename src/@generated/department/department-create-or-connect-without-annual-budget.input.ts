import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutAnnual_budgetInput } from './department-create-without-annual-budget.input';

@InputType()
export class DepartmentCreateOrConnectWithoutAnnual_budgetInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutAnnual_budgetInput)
    create!: DepartmentCreateWithoutAnnual_budgetInput;
}
