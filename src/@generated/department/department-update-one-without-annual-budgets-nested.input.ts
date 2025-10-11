import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutAnnual_budgetsInput } from './department-create-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutAnnual_budgetsInput } from './department-create-or-connect-without-annual-budgets.input';
import { DepartmentUpsertWithoutAnnual_budgetsInput } from './department-upsert-without-annual-budgets.input';
import { DepartmentWhereInput } from './department-where.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutAnnual_budgetsInput } from './department-update-to-one-with-where-without-annual-budgets.input';

@InputType()
export class DepartmentUpdateOneWithoutAnnual_budgetsNestedInput {

    @Field(() => DepartmentCreateWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutAnnual_budgetsInput)
    create?: DepartmentCreateWithoutAnnual_budgetsInput;

    @Field(() => DepartmentCreateOrConnectWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutAnnual_budgetsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutAnnual_budgetsInput;

    @Field(() => DepartmentUpsertWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutAnnual_budgetsInput)
    upsert?: DepartmentUpsertWithoutAnnual_budgetsInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    disconnect?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    delete?: DepartmentWhereInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutAnnual_budgetsInput)
    update?: DepartmentUpdateToOneWithWhereWithoutAnnual_budgetsInput;
}
