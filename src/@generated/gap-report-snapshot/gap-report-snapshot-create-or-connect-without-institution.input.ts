import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GapReportSnapshotWhereUniqueInput } from './gap-report-snapshot-where-unique.input';
import { Type } from 'class-transformer';
import { GapReportSnapshotCreateWithoutInstitutionInput } from './gap-report-snapshot-create-without-institution.input';

@InputType()
export class GapReportSnapshotCreateOrConnectWithoutInstitutionInput {

    @Field(() => GapReportSnapshotWhereUniqueInput, {nullable:false})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    where!: Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>;

    @Field(() => GapReportSnapshotCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => GapReportSnapshotCreateWithoutInstitutionInput)
    create!: GapReportSnapshotCreateWithoutInstitutionInput;
}
