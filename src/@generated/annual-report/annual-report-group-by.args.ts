import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualReportWhereInput } from './annual-report-where.input';
import { Type } from 'class-transformer';
import { AnnualReportOrderByWithAggregationInput } from './annual-report-order-by-with-aggregation.input';
import { AnnualReportScalarFieldEnum } from './annual-report-scalar-field.enum';
import { AnnualReportScalarWhereWithAggregatesInput } from './annual-report-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AnnualReportCountAggregateInput } from './annual-report-count-aggregate.input';
import { AnnualReportMinAggregateInput } from './annual-report-min-aggregate.input';
import { AnnualReportMaxAggregateInput } from './annual-report-max-aggregate.input';

@ArgsType()
export class AnnualReportGroupByArgs {

    @Field(() => AnnualReportWhereInput, {nullable:true})
    @Type(() => AnnualReportWhereInput)
    where?: AnnualReportWhereInput;

    @Field(() => [AnnualReportOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AnnualReportOrderByWithAggregationInput>;

    @Field(() => [AnnualReportScalarFieldEnum], {nullable:false})
    by!: Array<`${AnnualReportScalarFieldEnum}`>;

    @Field(() => AnnualReportScalarWhereWithAggregatesInput, {nullable:true})
    having?: AnnualReportScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AnnualReportCountAggregateInput, {nullable:true})
    _count?: AnnualReportCountAggregateInput;

    @Field(() => AnnualReportMinAggregateInput, {nullable:true})
    _min?: AnnualReportMinAggregateInput;

    @Field(() => AnnualReportMaxAggregateInput, {nullable:true})
    _max?: AnnualReportMaxAggregateInput;
}
