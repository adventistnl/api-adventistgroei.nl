import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutAnnual_budgetsInput } from './department-create-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutAnnual_budgetsInput } from './department-create-or-connect-without-annual-budgets.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutAnnual_budgetsInput {

    @Field(() => DepartmentCreateWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutAnnual_budgetsInput)
    create?: DepartmentCreateWithoutAnnual_budgetsInput;

    @Field(() => DepartmentCreateOrConnectWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutAnnual_budgetsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutAnnual_budgetsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
