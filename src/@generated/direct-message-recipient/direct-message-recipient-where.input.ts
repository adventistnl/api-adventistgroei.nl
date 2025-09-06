import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DirectMessageScalarRelationFilter } from '../direct-message/direct-message-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { RoleScalarRelationFilter } from '../role/role-scalar-relation-filter.input';

@InputType()
export class DirectMessageRecipientWhereInput {

    @Field(() => [DirectMessageRecipientWhereInput], {nullable:true})
    AND?: Array<DirectMessageRecipientWhereInput>;

    @Field(() => [DirectMessageRecipientWhereInput], {nullable:true})
    OR?: Array<DirectMessageRecipientWhereInput>;

    @Field(() => [DirectMessageRecipientWhereInput], {nullable:true})
    NOT?: Array<DirectMessageRecipientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    direct_message_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipient_user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipient_role_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    read_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    sent_at?: DateTimeFilter;

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

    @Field(() => DirectMessageScalarRelationFilter, {nullable:true})
    direct_message?: DirectMessageScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    recipient_user?: UserScalarRelationFilter;

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    recipient_role?: RoleScalarRelationFilter;
}
