import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GapReportSnapshotUpdateInput } from './gap-report-snapshot-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GapReportSnapshotWhereUniqueInput } from './gap-report-snapshot-where-unique.input';

@ArgsType()
export class UpdateOneGapReportSnapshotArgs {

    @Field(() => GapReportSnapshotUpdateInput, {nullable:false})
    @Type(() => GapReportSnapshotUpdateInput)
    data!: GapReportSnapshotUpdateInput;

    @Field(() => GapReportSnapshotWhereUniqueInput, {nullable:false})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    where!: Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>;
}
