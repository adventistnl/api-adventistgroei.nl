import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualReportWhereUniqueInput } from './annual-report-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualReportUpdateWithoutDepartmentInput } from './annual-report-update-without-department.input';

@InputType()
export class AnnualReportUpdateWithWhereUniqueWithoutDepartmentInput {

    @Field(() => AnnualReportWhereUniqueInput, {nullable:false})
    @Type(() => AnnualReportWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>;

    @Field(() => AnnualReportUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => AnnualReportUpdateWithoutDepartmentInput)
    data!: AnnualReportUpdateWithoutDepartmentInput;
}
