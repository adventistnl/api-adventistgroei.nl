import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GapReportSnapshotWhereUniqueInput } from './gap-report-snapshot-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGapReportSnapshotArgs {

    @Field(() => GapReportSnapshotWhereUniqueInput, {nullable:false})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    where!: Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>;
}
