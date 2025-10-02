import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { ProjectType } from '../prisma/project-type.enum';

@ObjectType()
export class ProjectMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    department_id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    budget?: Decimal;

    @Field(() => String, {nullable:true})
    media_link?: string;

    @Field(() => String, {nullable:true})
    owner_id?: string;

    @Field(() => LanguagePreference, {nullable:true})
    language_preference?: `${LanguagePreference}`;

    @Field(() => ProjectType, {nullable:true})
    type?: `${ProjectType}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deadline?: Date | string;

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
    event_id?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;
}
