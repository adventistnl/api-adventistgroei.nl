import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualReportCreateWithoutDepartmentInput } from './annual-report-create-without-department.input';
import { Type } from 'class-transformer';
import { AnnualReportCreateOrConnectWithoutDepartmentInput } from './annual-report-create-or-connect-without-department.input';
import { AnnualReportCreateManyDepartmentInputEnvelope } from './annual-report-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualReportWhereUniqueInput } from './annual-report-where-unique.input';

@InputType()
export class AnnualReportCreateNestedManyWithoutDepartmentInput {

    @Field(() => [AnnualReportCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualReportCreateWithoutDepartmentInput)
    create?: Array<AnnualReportCreateWithoutDepartmentInput>;

    @Field(() => [AnnualReportCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => AnnualReportCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<AnnualReportCreateOrConnectWithoutDepartmentInput>;

    @Field(() => AnnualReportCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => AnnualReportCreateManyDepartmentInputEnvelope)
    createMany?: AnnualReportCreateManyDepartmentInputEnvelope;

    @Field(() => [AnnualReportWhereUniqueInput], {nullable:true})
    @Type(() => AnnualReportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>>;
}
