import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GapReportSnapshotCreateManyInstitutionInput } from './gap-report-snapshot-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class GapReportSnapshotCreateManyInstitutionInputEnvelope {

    @Field(() => [GapReportSnapshotCreateManyInstitutionInput], {nullable:false})
    @Type(() => GapReportSnapshotCreateManyInstitutionInput)
    data!: Array<GapReportSnapshotCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
