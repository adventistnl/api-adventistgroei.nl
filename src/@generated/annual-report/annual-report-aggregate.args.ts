import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualReportWhereInput } from './annual-report-where.input';
import { Type } from 'class-transformer';
import { AnnualReportOrderByWithRelationInput } from './annual-report-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AnnualReportWhereUniqueInput } from './annual-report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnnualReportCountAggregateInput } from './annual-report-count-aggregate.input';
import { AnnualReportMinAggregateInput } from './annual-report-min-aggregate.input';
import { AnnualReportMaxAggregateInput } from './annual-report-max-aggregate.input';

@ArgsType()
export class AnnualReportAggregateArgs {

    @Field(() => AnnualReportWhereInput, {nullable:true})
    @Type(() => AnnualReportWhereInput)
    where?: AnnualReportWhereInput;

    @Field(() => [AnnualReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnnualReportOrderByWithRelationInput>;

    @Field(() => AnnualReportWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>;

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
