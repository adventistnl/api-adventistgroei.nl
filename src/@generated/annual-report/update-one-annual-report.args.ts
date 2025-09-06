import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualReportUpdateInput } from './annual-report-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AnnualReportWhereUniqueInput } from './annual-report-where-unique.input';

@ArgsType()
export class UpdateOneAnnualReportArgs {

    @Field(() => AnnualReportUpdateInput, {nullable:false})
    @Type(() => AnnualReportUpdateInput)
    data!: AnnualReportUpdateInput;

    @Field(() => AnnualReportWhereUniqueInput, {nullable:false})
    @Type(() => AnnualReportWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>;
}
