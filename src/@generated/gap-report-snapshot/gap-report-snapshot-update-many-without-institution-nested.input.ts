import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GapReportSnapshotCreateWithoutInstitutionInput } from './gap-report-snapshot-create-without-institution.input';
import { Type } from 'class-transformer';
import { GapReportSnapshotCreateOrConnectWithoutInstitutionInput } from './gap-report-snapshot-create-or-connect-without-institution.input';
import { GapReportSnapshotUpsertWithWhereUniqueWithoutInstitutionInput } from './gap-report-snapshot-upsert-with-where-unique-without-institution.input';
import { GapReportSnapshotCreateManyInstitutionInputEnvelope } from './gap-report-snapshot-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GapReportSnapshotWhereUniqueInput } from './gap-report-snapshot-where-unique.input';
import { GapReportSnapshotUpdateWithWhereUniqueWithoutInstitutionInput } from './gap-report-snapshot-update-with-where-unique-without-institution.input';
import { GapReportSnapshotUpdateManyWithWhereWithoutInstitutionInput } from './gap-report-snapshot-update-many-with-where-without-institution.input';
import { GapReportSnapshotScalarWhereInput } from './gap-report-snapshot-scalar-where.input';

@InputType()
export class GapReportSnapshotUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [GapReportSnapshotCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => GapReportSnapshotCreateWithoutInstitutionInput)
    create?: Array<GapReportSnapshotCreateWithoutInstitutionInput>;

    @Field(() => [GapReportSnapshotCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => GapReportSnapshotCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<GapReportSnapshotCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [GapReportSnapshotUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => GapReportSnapshotUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<GapReportSnapshotUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => GapReportSnapshotCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => GapReportSnapshotCreateManyInstitutionInputEnvelope)
    createMany?: GapReportSnapshotCreateManyInstitutionInputEnvelope;

    @Field(() => [GapReportSnapshotWhereUniqueInput], {nullable:true})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    set?: Array<Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>>;

    @Field(() => [GapReportSnapshotWhereUniqueInput], {nullable:true})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>>;

    @Field(() => [GapReportSnapshotWhereUniqueInput], {nullable:true})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>>;

    @Field(() => [GapReportSnapshotWhereUniqueInput], {nullable:true})
    @Type(() => GapReportSnapshotWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>>;

    @Field(() => [GapReportSnapshotUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => GapReportSnapshotUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<GapReportSnapshotUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [GapReportSnapshotUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => GapReportSnapshotUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<GapReportSnapshotUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [GapReportSnapshotScalarWhereInput], {nullable:true})
    @Type(() => GapReportSnapshotScalarWhereInput)
    deleteMany?: Array<GapReportSnapshotScalarWhereInput>;
}
