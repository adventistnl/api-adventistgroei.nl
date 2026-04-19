import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectActivityNullableScalarRelationFilter } from '../project-activity/project-activity-nullable-scalar-relation-filter.input';
import { SubsidyRequestNullableScalarRelationFilter } from '../subsidy-request/subsidy-request-nullable-scalar-relation-filter.input';
import { SubsidyRequestItemNullableScalarRelationFilter } from '../subsidy-request-item/subsidy-request-item-nullable-scalar-relation-filter.input';

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

    @Field(() => StringNullableFilter, {nullable:true})
    project_activities_id?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_refund_receipt?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    file_url?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    drive_file_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    filename?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    amount?: DecimalNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    approved?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_validated?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    validated_at?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    validated_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    rejection_reason?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    uploaded_by?: StringFilter;

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

    @Field(() => StringNullableFilter, {nullable:true})
    subsidy_request_item_id?: StringNullableFilter;

    @Field(() => ProjectActivityNullableScalarRelationFilter, {nullable:true})
    @Type(() => ProjectActivityNullableScalarRelationFilter)
    project_activity?: ProjectActivityNullableScalarRelationFilter;

    @Field(() => SubsidyRequestNullableScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestNullableScalarRelationFilter)
    subsidy_request?: SubsidyRequestNullableScalarRelationFilter;

    @Field(() => SubsidyRequestItemNullableScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestItemNullableScalarRelationFilter)
    subsidy_request_item?: SubsidyRequestItemNullableScalarRelationFilter;
}
