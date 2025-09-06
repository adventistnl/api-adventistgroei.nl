import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { RoleScalarRelationFilter } from '../role/role-scalar-relation-filter.input';

@InputType()
export class UserRoleWhereInput {

    @Field(() => [UserRoleWhereInput], {nullable:true})
    AND?: Array<UserRoleWhereInput>;

    @Field(() => [UserRoleWhereInput], {nullable:true})
    OR?: Array<UserRoleWhereInput>;

    @Field(() => [UserRoleWhereInput], {nullable:true})
    NOT?: Array<UserRoleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    role_id?: StringFilter;

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

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    role?: RoleScalarRelationFilter;
}
