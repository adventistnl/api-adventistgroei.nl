import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutDepartmentsInput } from './annual-budget-create-without-departments.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutDepartmentsInput } from './annual-budget-create-or-connect-without-departments.input';
import { AnnualBudgetUpsertWithoutDepartmentsInput } from './annual-budget-upsert-without-departments.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateToOneWithWhereWithoutDepartmentsInput } from './annual-budget-update-to-one-with-where-without-departments.input';

@InputType()
export class AnnualBudgetUpdateOneWithoutDepartmentsNestedInput {

    @Field(() => AnnualBudgetCreateWithoutDepartmentsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutDepartmentsInput)
    create?: AnnualBudgetCreateWithoutDepartmentsInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutDepartmentsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutDepartmentsInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutDepartmentsInput;

    @Field(() => AnnualBudgetUpsertWithoutDepartmentsInput, {nullable:true})
    @Type(() => AnnualBudgetUpsertWithoutDepartmentsInput)
    upsert?: AnnualBudgetUpsertWithoutDepartmentsInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    disconnect?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    delete?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateToOneWithWhereWithoutDepartmentsInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateToOneWithWhereWithoutDepartmentsInput)
    update?: AnnualBudgetUpdateToOneWithWhereWithoutDepartmentsInput;
}
