import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualReportWhereInput } from './annual-report-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAnnualReportArgs {

    @Field(() => AnnualReportWhereInput, {nullable:true})
    @Type(() => AnnualReportWhereInput)
    where?: AnnualReportWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
