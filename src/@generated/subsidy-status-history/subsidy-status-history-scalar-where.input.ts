import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class SubsidyStatusHistoryScalarWhereInput {

    @Field(() => [SubsidyStatusHistoryScalarWhereInput], {nullable:true})
    AND?: Array<SubsidyStatusHistoryScalarWhereInput>;

    @Field(() => [SubsidyStatusHistoryScalarWhereInput], {nullable:true})
    OR?: Array<SubsidyStatusHistoryScalarWhereInput>;

    @Field(() => [SubsidyStatusHistoryScalarWhereInput], {nullable:true})
    NOT?: Array<SubsidyStatusHistoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    subsidy_request_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    previous_status_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reason?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    changed_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    changed_at?: DateTimeFilter;

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
