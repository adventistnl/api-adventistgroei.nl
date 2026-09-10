import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutGap_report_snapshotsInput } from './institution-update-without-gap-report-snapshots.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutGap_report_snapshotsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutGap_report_snapshotsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutGap_report_snapshotsInput)
    data!: InstitutionUpdateWithoutGap_report_snapshotsInput;
}
