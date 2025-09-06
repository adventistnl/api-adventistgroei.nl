import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnnualReportCountAggregate } from './annual-report-count-aggregate.output';
import { AnnualReportMinAggregate } from './annual-report-min-aggregate.output';
import { AnnualReportMaxAggregate } from './annual-report-max-aggregate.output';

@ObjectType()
export class AggregateAnnualReport {

    @Field(() => AnnualReportCountAggregate, {nullable:true})
    _count?: AnnualReportCountAggregate;

    @Field(() => AnnualReportMinAggregate, {nullable:true})
    _min?: AnnualReportMinAggregate;

    @Field(() => AnnualReportMaxAggregate, {nullable:true})
    _max?: AnnualReportMaxAggregate;
}
