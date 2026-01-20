import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class SubsidyRequestItemScalarWhereInput {

    @Field(() => [SubsidyRequestItemScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestItemScalarWhereInput)
    AND?: Array<SubsidyRequestItemScalarWhereInput>;

    @Field(() => [SubsidyRequestItemScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestItemScalarWhereInput)
    OR?: Array<SubsidyRequestItemScalarWhereInput>;

    @Field(() => [SubsidyRequestItemScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestItemScalarWhereInput)
    NOT?: Array<SubsidyRequestItemScalarWhereInput>;

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
}
