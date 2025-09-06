import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualReportCreateWithoutDepartmentInput } from './annual-report-create-without-department.input';
import { Type } from 'class-transformer';
import { AnnualReportCreateOrConnectWithoutDepartmentInput } from './annual-report-create-or-connect-without-department.input';
import { AnnualReportUpsertWithWhereUniqueWithoutDepartmentInput } from './annual-report-upsert-with-where-unique-without-department.input';
import { AnnualReportCreateManyDepartmentInputEnvelope } from './annual-report-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualReportWhereUniqueInput } from './annual-report-where-unique.input';
import { AnnualReportUpdateWithWhereUniqueWithoutDepartmentInput } from './annual-report-update-with-where-unique-without-department.input';
import { AnnualReportUpdateManyWithWhereWithoutDepartmentInput } from './annual-report-update-many-with-where-without-department.input';
import { AnnualReportScalarWhereInput } from './annual-report-scalar-where.input';

@InputType()
export class AnnualReportUpdateManyWithoutDepartmentNestedInput {

    @Field(() => [AnnualReportCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualReportCreateWithoutDepartmentInput)
    create?: Array<AnnualReportCreateWithoutDepartmentInput>;

    @Field(() => [AnnualReportCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualReportCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<AnnualReportCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [AnnualReportUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualReportUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<AnnualReportUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => AnnualReportCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => AnnualReportCreateManyDepartmentInputEnvelope)
    createMany?: AnnualReportCreateManyDepartmentInputEnvelope;

    @Field(() => [AnnualReportWhereUniqueInput], {nullable:true})
    @Type(() => AnnualReportWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualReportWhereUniqueInput], {nullable:true})
    @Type(() => AnnualReportWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualReportWhereUniqueInput], {nullable:true})
    @Type(() => AnnualReportWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualReportWhereUniqueInput], {nullable:true})
    @Type(() => AnnualReportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>>;

    @Field(() => [AnnualReportUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualReportUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<AnnualReportUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [AnnualReportUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualReportUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<AnnualReportUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [AnnualReportScalarWhereInput], {nullable:true})
    @Type(() => AnnualReportScalarWhereInput)
    deleteMany?: Array<AnnualReportScalarWhereInput>;
}
