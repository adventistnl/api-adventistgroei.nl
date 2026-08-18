import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GapReportSnapshotUpdateManyMutationInput } from './gap-report-snapshot-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GapReportSnapshotWhereInput } from './gap-report-snapshot-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyGapReportSnapshotArgs {

    @Field(() => GapReportSnapshotUpdateManyMutationInput, {nullable:false})
    @Type(() => GapReportSnapshotUpdateManyMutationInput)
    data!: GapReportSnapshotUpdateManyMutationInput;

    @Field(() => GapReportSnapshotWhereInput, {nullable:true})
    @Type(() => GapReportSnapshotWhereInput)
    where?: GapReportSnapshotWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
