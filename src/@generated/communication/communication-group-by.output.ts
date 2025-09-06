import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { CommunicationCountAggregate } from './communication-count-aggregate.output';
import { CommunicationMinAggregate } from './communication-min-aggregate.output';
import { CommunicationMaxAggregate } from './communication-max-aggregate.output';

@ObjectType()
export class CommunicationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    priority!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => Date, {nullable:false})
    schedule_at!: Date | string;

    @Field(() => Date, {nullable:false})
    published_at!: Date | string;

    @Field(() => String, {nullable:false})
    author_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => CommunicationCountAggregate, {nullable:true})
    _count?: CommunicationCountAggregate;

    @Field(() => CommunicationMinAggregate, {nullable:true})
    _min?: CommunicationMinAggregate;

    @Field(() => CommunicationMaxAggregate, {nullable:true})
    _max?: CommunicationMaxAggregate;
}
