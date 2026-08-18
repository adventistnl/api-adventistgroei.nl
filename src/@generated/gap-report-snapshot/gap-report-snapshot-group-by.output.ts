import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GapReportSnapshotCountAggregate } from './gap-report-snapshot-count-aggregate.output';
import { GapReportSnapshotMinAggregate } from './gap-report-snapshot-min-aggregate.output';
import { GapReportSnapshotMaxAggregate } from './gap-report-snapshot-max-aggregate.output';

@ObjectType()
export class GapReportSnapshotGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    month!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    churches_without_preacher!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    preachers_without_assignment!: any;

    @Field(() => Date, {nullable:false})
    computed_at!: Date | string;

    @Field(() => GapReportSnapshotCountAggregate, {nullable:true})
    _count?: GapReportSnapshotCountAggregate;

    @Field(() => GapReportSnapshotMinAggregate, {nullable:true})
    _min?: GapReportSnapshotMinAggregate;

    @Field(() => GapReportSnapshotMaxAggregate, {nullable:true})
    _max?: GapReportSnapshotMaxAggregate;
}
