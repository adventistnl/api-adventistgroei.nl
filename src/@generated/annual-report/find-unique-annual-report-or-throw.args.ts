import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualReportWhereUniqueInput } from './annual-report-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAnnualReportOrThrowArgs {

    @Field(() => AnnualReportWhereUniqueInput, {nullable:false})
    @Type(() => AnnualReportWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>;
}
