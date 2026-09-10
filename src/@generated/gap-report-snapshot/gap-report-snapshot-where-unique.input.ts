import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GapReportSnapshotInstitution_idMonthCompoundUniqueInput } from './gap-report-snapshot-institution-id-month-compound-unique.input';
import { GapReportSnapshotWhereInput } from './gap-report-snapshot-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class GapReportSnapshotWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GapReportSnapshotInstitution_idMonthCompoundUniqueInput, {nullable:true})
    institution_id_month?: GapReportSnapshotInstitution_idMonthCompoundUniqueInput;

    @Field(() => [GapReportSnapshotWhereInput], {nullable:true})
    AND?: Array<GapReportSnapshotWhereInput>;

    @Field(() => [GapReportSnapshotWhereInput], {nullable:true})
    OR?: Array<GapReportSnapshotWhereInput>;

    @Field(() => [GapReportSnapshotWhereInput], {nullable:true})
    NOT?: Array<GapReportSnapshotWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    month?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    churches_without_preacher?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    preachers_without_assignment?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    computed_at?: DateTimeFilter;

    @Field(() => InstitutionScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionScalarRelationFilter)
    institution?: InstitutionScalarRelationFilter;
}
