import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GapReportSnapshotWhereInput } from './gap-report-snapshot-where.input';

@InputType()
export class GapReportSnapshotListRelationFilter {

    @Field(() => GapReportSnapshotWhereInput, {nullable:true})
    every?: GapReportSnapshotWhereInput;

    @Field(() => GapReportSnapshotWhereInput, {nullable:true})
    some?: GapReportSnapshotWhereInput;

    @Field(() => GapReportSnapshotWhereInput, {nullable:true})
    none?: GapReportSnapshotWhereInput;
}
