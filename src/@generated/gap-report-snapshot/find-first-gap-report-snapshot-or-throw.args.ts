import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GapReportSnapshotWhereInput } from './gap-report-snapshot-where.input';
import { Type } from 'class-transformer';
import { GapReportSnapshotOrderByWithRelationInput } from './gap-report-snapshot-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GapReportSnapshotWhereUniqueInput } from './gap-report-snapshot-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GapReportSnapshotScalarFieldEnum } from './gap-report-snapshot-scalar-field.enum';

@ArgsType()
export class FindFirstGapReportSnapshotOrThrowArgs {

    @Field(() => GapReportSnapshotWhereInput, {nullable:true})
    @Type(() => GapReportSnapshotWhereInput)
    where?: GapReportSnapshotWhereInput;

    @Field(() => [GapReportSnapshotOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GapReportSnapshotOrderByWithRelationInput>;

    @Field(() => GapReportSnapshotWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GapReportSnapshotWhereUniqueInput, 'id' | 'institution_id_month'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GapReportSnapshotScalarFieldEnum], {nullable:true})
    distinct?: Array<`${GapReportSnapshotScalarFieldEnum}`>;
}
