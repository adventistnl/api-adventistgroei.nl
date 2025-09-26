import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutAnnual_budget_refInput } from './department-update-without-annual-budget-ref.input';
import { DepartmentCreateWithoutAnnual_budget_refInput } from './department-create-without-annual-budget-ref.input';

@InputType()
export class DepartmentUpsertWithWhereUniqueWithoutAnnual_budget_refInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateWithoutAnnual_budget_refInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutAnnual_budget_refInput)
    update!: DepartmentUpdateWithoutAnnual_budget_refInput;

    @Field(() => DepartmentCreateWithoutAnnual_budget_refInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutAnnual_budget_refInput)
    create!: DepartmentCreateWithoutAnnual_budget_refInput;
}
