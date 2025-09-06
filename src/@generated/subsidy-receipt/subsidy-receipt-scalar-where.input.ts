import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

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
    subsidy_activities_id?: StringFilter;

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
}
