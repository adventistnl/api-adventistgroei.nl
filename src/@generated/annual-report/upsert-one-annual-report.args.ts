import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualReportWhereUniqueInput } from './annual-report-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualReportCreateInput } from './annual-report-create.input';
import { AnnualReportUpdateInput } from './annual-report-update.input';

@ArgsType()
export class UpsertOneAnnualReportArgs {

    @Field(() => AnnualReportWhereUniqueInput, {nullable:false})
    @Type(() => AnnualReportWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>;

    @Field(() => AnnualReportCreateInput, {nullable:false})
    @Type(() => AnnualReportCreateInput)
    create!: AnnualReportCreateInput;

    @Field(() => AnnualReportUpdateInput, {nullable:false})
    @Type(() => AnnualReportUpdateInput)
    update!: AnnualReportUpdateInput;
}
