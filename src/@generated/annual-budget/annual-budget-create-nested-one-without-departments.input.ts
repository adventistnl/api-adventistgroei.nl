import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutDepartmentsInput } from './annual-budget-create-without-departments.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutDepartmentsInput } from './annual-budget-create-or-connect-without-departments.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetCreateNestedOneWithoutDepartmentsInput {

    @Field(() => AnnualBudgetCreateWithoutDepartmentsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutDepartmentsInput)
    create?: AnnualBudgetCreateWithoutDepartmentsInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutDepartmentsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutDepartmentsInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutDepartmentsInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;
}
