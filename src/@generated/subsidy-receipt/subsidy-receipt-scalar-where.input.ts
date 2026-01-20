import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SubsidyReceiptScalarWhereInput {

    @Field(() => [SubsidyReceiptScalarWhereInput], {nullable:true})
    @Type(() => SubsidyReceiptScalarWhereInput)
    AND?: Array<SubsidyReceiptScalarWhereInput>;

    @Field(() => [SubsidyReceiptScalarWhereInput], {nullable:true})
    @Type(() => SubsidyReceiptScalarWhereInput)
    OR?: Array<SubsidyReceiptScalarWhereInput>;

    @Field(() => [SubsidyReceiptScalarWhereInput], {nullable:true})
    @Type(() => SubsidyReceiptScalarWhereInput)
    NOT?: Array<SubsidyReceiptScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    project_activities_id?: StringFilter;

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
}
