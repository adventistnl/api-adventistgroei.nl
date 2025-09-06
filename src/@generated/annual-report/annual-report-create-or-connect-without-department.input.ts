import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualReportWhereUniqueInput } from './annual-report-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualReportCreateWithoutDepartmentInput } from './annual-report-create-without-department.input';

@InputType()
export class AnnualReportCreateOrConnectWithoutDepartmentInput {

    @Field(() => AnnualReportWhereUniqueInput, {nullable:false})
    @Type(() => AnnualReportWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>;

    @Field(() => AnnualReportCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => AnnualReportCreateWithoutDepartmentInput)
    create!: AnnualReportCreateWithoutDepartmentInput;
}
