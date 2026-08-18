import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GapReportSnapshotWhereUniqueInput } from './gap-report-snapshot-where-unique.input';
import { Type } from 'class-transformer';
import { GapReportSnapshotUpdateWithoutInstitutionInput } from './gap-report-snapshot-update-without-institution.input';
import { GapReportSnapshotCreateWithoutInstitutionInput } from './gap-report-snapshot-create-without-institution.input';

@InputType()
export class GapReportSnapshotUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => GapReportSnapshotWhereUniqueInput, {nullable:false})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    where!: Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>;

    @Field(() => GapReportSnapshotUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => GapReportSnapshotUpdateWithoutInstitutionInput)
    update!: GapReportSnapshotUpdateWithoutInstitutionInput;

    @Field(() => GapReportSnapshotCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => GapReportSnapshotCreateWithoutInstitutionInput)
    create!: GapReportSnapshotCreateWithoutInstitutionInput;
}
