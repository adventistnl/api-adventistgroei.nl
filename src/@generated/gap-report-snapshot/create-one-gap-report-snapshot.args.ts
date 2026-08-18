import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GapReportSnapshotCreateInput } from './gap-report-snapshot-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGapReportSnapshotArgs {

    @Field(() => GapReportSnapshotCreateInput, {nullable:false})
    @Type(() => GapReportSnapshotCreateInput)
    data!: GapReportSnapshotCreateInput;
}
