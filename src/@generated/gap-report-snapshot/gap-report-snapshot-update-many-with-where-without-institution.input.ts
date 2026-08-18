import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GapReportSnapshotScalarWhereInput } from './gap-report-snapshot-scalar-where.input';
import { Type } from 'class-transformer';
import { GapReportSnapshotUpdateManyMutationInput } from './gap-report-snapshot-update-many-mutation.input';

@InputType()
export class GapReportSnapshotUpdateManyWithWhereWithoutInstitutionInput {

    @Field(() => GapReportSnapshotScalarWhereInput, {nullable:false})
    @Type(() => GapReportSnapshotScalarWhereInput)
    where!: GapReportSnapshotScalarWhereInput;

    @Field(() => GapReportSnapshotUpdateManyMutationInput, {nullable:false})
    @Type(() => GapReportSnapshotUpdateManyMutationInput)
    data!: GapReportSnapshotUpdateManyMutationInput;
}
