import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutDepartmentInput } from './annual-budget-create-without-department.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutDepartmentInput } from './annual-budget-create-or-connect-without-department.input';
import { AnnualBudgetCreateManyDepartmentInputEnvelope } from './annual-budget-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetUncheckedCreateNestedManyWithoutDepartmentInput {

    @Field(() => [AnnualBudgetCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutDepartmentInput)
    create?: Array<AnnualBudgetCreateWithoutDepartmentInput>;

    @Field(() => [AnnualBudgetCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<AnnualBudgetCreateOrConnectWithoutDepartmentInput>;

    @Field(() => AnnualBudgetCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => AnnualBudgetCreateManyDepartmentInputEnvelope)
    createMany?: AnnualBudgetCreateManyDepartmentInputEnvelope;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;
}
