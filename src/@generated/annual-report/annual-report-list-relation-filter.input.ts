import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualReportWhereInput } from './annual-report-where.input';

@InputType()
export class AnnualReportListRelationFilter {

    @Field(() => AnnualReportWhereInput, {nullable:true})
    every?: AnnualReportWhereInput;

    @Field(() => AnnualReportWhereInput, {nullable:true})
    some?: AnnualReportWhereInput;

    @Field(() => AnnualReportWhereInput, {nullable:true})
    none?: AnnualReportWhereInput;
}
