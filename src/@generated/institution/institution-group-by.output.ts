import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { InstitutionCountAggregate } from './institution-count-aggregate.output';
import { InstitutionMinAggregate } from './institution-min-aggregate.output';
import { InstitutionMaxAggregate } from './institution-max-aggregate.output';

@ObjectType()
export class InstitutionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    denomination!: string;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => String, {nullable:true})
    contact_id?: string;

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

    @Field(() => InstitutionCountAggregate, {nullable:true})
    _count?: InstitutionCountAggregate;

    @Field(() => InstitutionMinAggregate, {nullable:true})
    _min?: InstitutionMinAggregate;

    @Field(() => InstitutionMaxAggregate, {nullable:true})
    _max?: InstitutionMaxAggregate;
}
