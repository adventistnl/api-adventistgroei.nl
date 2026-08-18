import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GapReportSnapshotWhereUniqueInput } from './gap-report-snapshot-where-unique.input';
import { Type } from 'class-transformer';
import { GapReportSnapshotUpdateWithoutInstitutionInput } from './gap-report-snapshot-update-without-institution.input';

@InputType()
export class GapReportSnapshotUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => GapReportSnapshotWhereUniqueInput, {nullable:false})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    where!: Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>;

    @Field(() => GapReportSnapshotUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => GapReportSnapshotUpdateWithoutInstitutionInput)
    data!: GapReportSnapshotUpdateWithoutInstitutionInput;
}
