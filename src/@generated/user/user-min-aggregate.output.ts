import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GenderType } from '../prisma/gender-type.enum';
import { LanguagePreference } from '../prisma/language-preference.enum';

@ObjectType()
export class UserMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => GenderType, {nullable:true})
    gender?: `${GenderType}`;

    @Field(() => LanguagePreference, {nullable:true})
    language_preference?: `${LanguagePreference}`;

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

    @Field(() => String, {nullable:true})
    contact_id?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    church_id?: string;

    @Field(() => String, {nullable:true})
    department_id?: string;
}
