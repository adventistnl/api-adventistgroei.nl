import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryWhereInput } from './subsidy-status-history-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SubsidyRequestScalarRelationFilter } from '../subsidy-request/subsidy-request-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { SubsidyStatusScalarRelationFilter } from '../subsidy-status/subsidy-status-scalar-relation-filter.input';
import { SubsidyStatusNullableScalarRelationFilter } from '../subsidy-status/subsidy-status-nullable-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class SubsidyStatusHistoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [SubsidyStatusHistoryWhereInput], {nullable:true})
    AND?: Array<SubsidyStatusHistoryWhereInput>;

    @Field(() => [SubsidyStatusHistoryWhereInput], {nullable:true})
    OR?: Array<SubsidyStatusHistoryWhereInput>;

    @Field(() => [SubsidyStatusHistoryWhereInput], {nullable:true})
    NOT?: Array<SubsidyStatusHistoryWhereInput>;

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

    @Field(() => SubsidyRequestScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestScalarRelationFilter)
    subsidy_request?: SubsidyRequestScalarRelationFilter;

    @Field(() => SubsidyStatusScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyStatusScalarRelationFilter)
    status?: SubsidyStatusScalarRelationFilter;

    @Field(() => SubsidyStatusNullableScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyStatusNullableScalarRelationFilter)
    previous_status?: SubsidyStatusNullableScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;
}
