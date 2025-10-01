import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ProjectActivityScalarRelationFilter } from '../project-activity/project-activity-scalar-relation-filter.input';
import { SubsidyRequestNullableScalarRelationFilter } from '../subsidy-request/subsidy-request-nullable-scalar-relation-filter.input';

@InputType()
export class SubsidyReceiptWhereInput {

    @Field(() => [SubsidyReceiptWhereInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereInput)
    AND?: Array<SubsidyReceiptWhereInput>;

    @Field(() => [SubsidyReceiptWhereInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereInput)
    OR?: Array<SubsidyReceiptWhereInput>;

    @Field(() => [SubsidyReceiptWhereInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereInput)
    NOT?: Array<SubsidyReceiptWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    project_activities_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    file_path?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    amount?: DecimalFilter;

    @Field(() => BoolFilter, {nullable:true})
    approved?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updated_by?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_deleted?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deleted_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subsidy_request_id?: StringNullableFilter;

    @Field(() => ProjectActivityScalarRelationFilter, {nullable:true})
    @Type(() => ProjectActivityScalarRelationFilter)
    project_activity?: ProjectActivityScalarRelationFilter;

    @Field(() => SubsidyRequestNullableScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestNullableScalarRelationFilter)
    subsidy_request?: SubsidyRequestNullableScalarRelationFilter;
}
