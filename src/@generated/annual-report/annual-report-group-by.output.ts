import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnnualReportCountAggregate } from './annual-report-count-aggregate.output';
import { AnnualReportMinAggregate } from './annual-report-min-aggregate.output';
import { AnnualReportMaxAggregate } from './annual-report-max-aggregate.output';

@ObjectType()
export class AnnualReportGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    file_path!: string;

    @Field(() => Date, {nullable:false})
    submission_date!: Date | string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => AnnualReportCountAggregate, {nullable:true})
    _count?: AnnualReportCountAggregate;

    @Field(() => AnnualReportMinAggregate, {nullable:true})
    _min?: AnnualReportMinAggregate;

    @Field(() => AnnualReportMaxAggregate, {nullable:true})
    _max?: AnnualReportMaxAggregate;
}
