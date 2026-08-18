import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GapReportSnapshotWhereUniqueInput } from './gap-report-snapshot-where-unique.input';
import { Type } from 'class-transformer';
import { GapReportSnapshotCreateInput } from './gap-report-snapshot-create.input';
import { GapReportSnapshotUpdateInput } from './gap-report-snapshot-update.input';

@ArgsType()
export class UpsertOneGapReportSnapshotArgs {

    @Field(() => GapReportSnapshotWhereUniqueInput, {nullable:false})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    where!: Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>;

    @Field(() => GapReportSnapshotCreateInput, {nullable:false})
    @Type(() => GapReportSnapshotCreateInput)
    create!: GapReportSnapshotCreateInput;

    @Field(() => GapReportSnapshotUpdateInput, {nullable:false})
    @Type(() => GapReportSnapshotUpdateInput)
    update!: GapReportSnapshotUpdateInput;
}
