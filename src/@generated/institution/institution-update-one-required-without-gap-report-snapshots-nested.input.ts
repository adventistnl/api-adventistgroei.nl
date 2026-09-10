import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutGap_report_snapshotsInput } from './institution-create-without-gap-report-snapshots.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutGap_report_snapshotsInput } from './institution-create-or-connect-without-gap-report-snapshots.input';
import { InstitutionUpsertWithoutGap_report_snapshotsInput } from './institution-upsert-without-gap-report-snapshots.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutGap_report_snapshotsInput } from './institution-update-to-one-with-where-without-gap-report-snapshots.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutGap_report_snapshotsNestedInput {

    @Field(() => InstitutionCreateWithoutGap_report_snapshotsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutGap_report_snapshotsInput)
    create?: InstitutionCreateWithoutGap_report_snapshotsInput;

    @Field(() => InstitutionCreateOrConnectWithoutGap_report_snapshotsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutGap_report_snapshotsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutGap_report_snapshotsInput;

    @Field(() => InstitutionUpsertWithoutGap_report_snapshotsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutGap_report_snapshotsInput)
    upsert?: InstitutionUpsertWithoutGap_report_snapshotsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutGap_report_snapshotsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutGap_report_snapshotsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutGap_report_snapshotsInput;
}
