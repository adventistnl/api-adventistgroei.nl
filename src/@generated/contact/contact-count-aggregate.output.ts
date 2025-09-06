import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ContactCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    phone!: number;

    @Field(() => Int, {nullable:false})
    mobile!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    full_address!: number;

    @Field(() => Int, {nullable:false})
    postal_code!: number;

    @Field(() => Int, {nullable:false})
    website!: number;

    @Field(() => Int, {nullable:false})
    notes!: number;

    @Field(() => Int, {nullable:false})
    is_primary!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    updated_by!: number;

    @Field(() => Int, {nullable:false})
    is_deleted!: number;

    @Field(() => Int, {nullable:false})
    deleted_at!: number;

    @Field(() => Int, {nullable:false})
    deleted_by!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
