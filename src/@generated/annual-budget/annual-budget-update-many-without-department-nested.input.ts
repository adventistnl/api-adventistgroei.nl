import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutDepartmentInput } from './annual-budget-create-without-department.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutDepartmentInput } from './annual-budget-create-or-connect-without-department.input';
import { AnnualBudgetUpsertWithWhereUniqueWithoutDepartmentInput } from './annual-budget-upsert-with-where-unique-without-department.input';
import { AnnualBudgetCreateManyDepartmentInputEnvelope } from './annual-budget-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { AnnualBudgetUpdateWithWhereUniqueWithoutDepartmentInput } from './annual-budget-update-with-where-unique-without-department.input';
import { AnnualBudgetUpdateManyWithWhereWithoutDepartmentInput } from './annual-budget-update-many-with-where-without-department.input';
import { AnnualBudgetScalarWhereInput } from './annual-budget-scalar-where.input';

@InputType()
export class AnnualBudgetUpdateManyWithoutDepartmentNestedInput {

    @Field(() => [AnnualBudgetCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutDepartmentInput)
    create?: Array<AnnualBudgetCreateWithoutDepartmentInput>;

    @Field(() => [AnnualBudgetCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<AnnualBudgetCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [AnnualBudgetUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualBudgetUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<AnnualBudgetUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => AnnualBudgetCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => AnnualBudgetCreateManyDepartmentInputEnvelope)
    createMany?: AnnualBudgetCreateManyDepartmentInputEnvelope;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualBudgetUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualBudgetUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<AnnualBudgetUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [AnnualBudgetUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualBudgetUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<AnnualBudgetUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [AnnualBudgetScalarWhereInput], {nullable:true})
    @Type(() => AnnualBudgetScalarWhereInput)
    deleteMany?: Array<AnnualBudgetScalarWhereInput>;
}
