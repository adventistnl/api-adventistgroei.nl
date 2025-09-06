import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageWhereInput } from './direct-message-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { DirectMessageRecipientListRelationFilter } from '../direct-message-recipient/direct-message-recipient-list-relation-filter.input';

@InputType()
export class DirectMessageWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [DirectMessageWhereInput], {nullable:true})
    AND?: Array<DirectMessageWhereInput>;

    @Field(() => [DirectMessageWhereInput], {nullable:true})
    OR?: Array<DirectMessageWhereInput>;

    @Field(() => [DirectMessageWhereInput], {nullable:true})
    NOT?: Array<DirectMessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sender_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

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

    @Field(() => InstitutionScalarRelationFilter, {nullable:true})
    @Type(() => InstitutionScalarRelationFilter)
    institution?: InstitutionScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    sender?: UserScalarRelationFilter;

    @Field(() => DirectMessageRecipientListRelationFilter, {nullable:true})
    direct_message_recipients?: DirectMessageRecipientListRelationFilter;
}
