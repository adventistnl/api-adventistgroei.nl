import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutAnnual_budget_refInput } from './department-create-without-annual-budget-ref.input';

@InputType()
export class DepartmentCreateOrConnectWithoutAnnual_budget_refInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutAnnual_budget_refInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutAnnual_budget_refInput)
    create!: DepartmentCreateWithoutAnnual_budget_refInput;
}
