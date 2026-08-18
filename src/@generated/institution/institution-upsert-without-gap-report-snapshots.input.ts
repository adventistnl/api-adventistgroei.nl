import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutGap_report_snapshotsInput } from './institution-update-without-gap-report-snapshots.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutGap_report_snapshotsInput } from './institution-create-without-gap-report-snapshots.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutGap_report_snapshotsInput {

    @Field(() => InstitutionUpdateWithoutGap_report_snapshotsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutGap_report_snapshotsInput)
    update!: InstitutionUpdateWithoutGap_report_snapshotsInput;

    @Field(() => InstitutionCreateWithoutGap_report_snapshotsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutGap_report_snapshotsInput)
    create!: InstitutionCreateWithoutGap_report_snapshotsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
