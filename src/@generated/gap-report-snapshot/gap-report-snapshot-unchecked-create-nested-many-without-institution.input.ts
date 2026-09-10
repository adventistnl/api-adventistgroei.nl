import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GapReportSnapshotCreateWithoutInstitutionInput } from './gap-report-snapshot-create-without-institution.input';
import { Type } from 'class-transformer';
import { GapReportSnapshotCreateOrConnectWithoutInstitutionInput } from './gap-report-snapshot-create-or-connect-without-institution.input';
import { GapReportSnapshotCreateManyInstitutionInputEnvelope } from './gap-report-snapshot-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GapReportSnapshotWhereUniqueInput } from './gap-report-snapshot-where-unique.input';

@InputType()
export class GapReportSnapshotUncheckedCreateNestedManyWithoutInstitutionInput {

    @Field(() => [GapReportSnapshotCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => GapReportSnapshotCreateWithoutInstitutionInput)
    create?: Array<GapReportSnapshotCreateWithoutInstitutionInput>;

    @Field(() => [GapReportSnapshotCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => GapReportSnapshotCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<GapReportSnapshotCreateOrConnectWithoutInstitutionInput>;

    @Field(() => GapReportSnapshotCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => GapReportSnapshotCreateManyInstitutionInputEnvelope)
    createMany?: GapReportSnapshotCreateManyInstitutionInputEnvelope;

    @Field(() => [GapReportSnapshotWhereUniqueInput], {nullable:true})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>>;
}
