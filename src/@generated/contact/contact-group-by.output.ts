import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContactCountAggregate } from './contact-count-aggregate.output';
import { ContactMinAggregate } from './contact-min-aggregate.output';
import { ContactMaxAggregate } from './contact-max-aggregate.output';

@ObjectType()
export class ContactGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    full_address?: string;

    @Field(() => String, {nullable:true})
    postal_code?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Boolean, {nullable:false})
    is_primary!: boolean;

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

    @Field(() => ContactCountAggregate, {nullable:true})
    _count?: ContactCountAggregate;

    @Field(() => ContactMinAggregate, {nullable:true})
    _min?: ContactMinAggregate;

    @Field(() => ContactMaxAggregate, {nullable:true})
    _max?: ContactMaxAggregate;
}
