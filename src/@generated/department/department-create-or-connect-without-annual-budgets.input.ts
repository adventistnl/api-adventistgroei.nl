import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutAnnual_budgetsInput } from './department-create-without-annual-budgets.input';

@InputType()
export class DepartmentCreateOrConnectWithoutAnnual_budgetsInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutAnnual_budgetsInput)
    create!: DepartmentCreateWithoutAnnual_budgetsInput;
}
