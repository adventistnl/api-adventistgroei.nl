import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DepartmentScalarRelationFilter } from '../department/department-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { SubsidyRequestListRelationFilter } from '../subsidy-request/subsidy-request-list-relation-filter.input';

@InputType()
export class SubsidyStatusWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [SubsidyStatusWhereInput], {nullable:true})
    AND?: Array<SubsidyStatusWhereInput>;

    @Field(() => [SubsidyStatusWhereInput], {nullable:true})
    OR?: Array<SubsidyStatusWhereInput>;

    @Field(() => [SubsidyStatusWhereInput], {nullable:true})
    NOT?: Array<SubsidyStatusWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    department_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    assigned_to?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

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

    @Field(() => DepartmentScalarRelationFilter, {nullable:true})
    @Type(() => DepartmentScalarRelationFilter)
    department?: DepartmentScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    assigned_user?: UserScalarRelationFilter;

    @Field(() => SubsidyRequestListRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestListRelationFilter)
    subsidy_requests?: SubsidyRequestListRelationFilter;
}
