import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';

@ObjectType()
export class CommunicationMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:true})
    priority?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => LanguagePreference, {nullable:true})
    language_preference?: `${LanguagePreference}`;

    @Field(() => Date, {nullable:true})
    schedule_at?: Date | string;

    @Field(() => Date, {nullable:true})
    published_at?: Date | string;

    @Field(() => String, {nullable:true})
    author_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;
}
