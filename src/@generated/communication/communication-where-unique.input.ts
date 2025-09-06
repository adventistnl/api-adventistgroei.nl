import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationWhereInput } from './communication-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguagePreferenceFilter } from '../prisma/enum-language-preference-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { InstitutionScalarRelationFilter } from '../institution/institution-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { CommunicationRecipientListRelationFilter } from '../communication-recipient/communication-recipient-list-relation-filter.input';

@InputType()
export class CommunicationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CommunicationWhereInput], {nullable:true})
    AND?: Array<CommunicationWhereInput>;

    @Field(() => [CommunicationWhereInput], {nullable:true})
    OR?: Array<CommunicationWhereInput>;

    @Field(() => [CommunicationWhereInput], {nullable:true})
    NOT?: Array<CommunicationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    priority?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => EnumLanguagePreferenceFilter, {nullable:true})
    language_preference?: EnumLanguagePreferenceFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    schedule_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    published_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    author_id?: StringFilter;

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
    author?: UserScalarRelationFilter;

    @Field(() => CommunicationRecipientListRelationFilter, {nullable:true})
    communication_recipients?: CommunicationRecipientListRelationFilter;
}
