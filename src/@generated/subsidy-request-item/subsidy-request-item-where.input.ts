import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SubsidyRequestScalarRelationFilter } from '../subsidy-request/subsidy-request-scalar-relation-filter.input';
import { ProjectActivityScalarRelationFilter } from '../project-activity/project-activity-scalar-relation-filter.input';

@InputType()
export class SubsidyRequestItemWhereInput {

    @Field(() => [SubsidyRequestItemWhereInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    AND?: Array<SubsidyRequestItemWhereInput>;

    @Field(() => [SubsidyRequestItemWhereInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    OR?: Array<SubsidyRequestItemWhereInput>;

    @Field(() => [SubsidyRequestItemWhereInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    NOT?: Array<SubsidyRequestItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    subsidy_request_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    project_activity_id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    requested_amount?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    approved_amount?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_deleted?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deleted_by?: StringNullableFilter;

    @Field(() => SubsidyRequestScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestScalarRelationFilter)
    subsidy_request?: SubsidyRequestScalarRelationFilter;

    @Field(() => ProjectActivityScalarRelationFilter, {nullable:true})
    @Type(() => ProjectActivityScalarRelationFilter)
    project_activity?: ProjectActivityScalarRelationFilter;
}
