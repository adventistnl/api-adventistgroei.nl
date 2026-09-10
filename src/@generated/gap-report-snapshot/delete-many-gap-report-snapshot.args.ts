import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GapReportSnapshotWhereInput } from './gap-report-snapshot-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyGapReportSnapshotArgs {

    @Field(() => GapReportSnapshotWhereInput, {nullable:true})
    @Type(() => GapReportSnapshotWhereInput)
    where?: GapReportSnapshotWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
