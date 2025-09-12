import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { SubsidyRequestScalarRelationFilter } from '../subsidy-request/subsidy-request-scalar-relation-filter.input';
import { SubsidyReceiptListRelationFilter } from '../subsidy-receipt/subsidy-receipt-list-relation-filter.input';

@InputType()
export class ProjectActivityWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ProjectActivityWhereInput], {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    AND?: Array<ProjectActivityWhereInput>;

    @Field(() => [ProjectActivityWhereInput], {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    OR?: Array<ProjectActivityWhereInput>;

    @Field(() => [ProjectActivityWhereInput], {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    NOT?: Array<ProjectActivityWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    subsidy_request_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    budget_amount?: DecimalFilter;

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

    @Field(() => SubsidyRequestScalarRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestScalarRelationFilter)
    subsidy_request?: SubsidyRequestScalarRelationFilter;

    @Field(() => SubsidyReceiptListRelationFilter, {nullable:true})
    @Type(() => SubsidyReceiptListRelationFilter)
    subsidy_receipts?: SubsidyReceiptListRelationFilter;
}
