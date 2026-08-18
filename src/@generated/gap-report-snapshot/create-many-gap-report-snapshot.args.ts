import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GapReportSnapshotCreateManyInput } from './gap-report-snapshot-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGapReportSnapshotArgs {

    @Field(() => [GapReportSnapshotCreateManyInput], {nullable:false})
    @Type(() => GapReportSnapshotCreateManyInput)
    data!: Array<GapReportSnapshotCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
