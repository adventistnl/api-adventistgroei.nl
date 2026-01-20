import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionWhereInput } from './role-permission-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { RoleScalarRelationFilter } from '../role/role-scalar-relation-filter.input';
import { PermissionScalarRelationFilter } from '../permission/permission-scalar-relation-filter.input';

@InputType()
export class RolePermissionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [RolePermissionWhereInput], {nullable:true})
    AND?: Array<RolePermissionWhereInput>;

    @Field(() => [RolePermissionWhereInput], {nullable:true})
    OR?: Array<RolePermissionWhereInput>;

    @Field(() => [RolePermissionWhereInput], {nullable:true})
    NOT?: Array<RolePermissionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    role_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    permission_id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_essential?: BoolFilter;

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

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    role?: RoleScalarRelationFilter;

    @Field(() => PermissionScalarRelationFilter, {nullable:true})
    permission?: PermissionScalarRelationFilter;
}
