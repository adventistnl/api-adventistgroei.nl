import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommunicationCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    institution_id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    content!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    language_preference!: number;

    @Field(() => Int, {nullable:false})
    schedule_at!: number;

    @Field(() => Int, {nullable:false})
    published_at!: number;

    @Field(() => Int, {nullable:false})
    author_id!: number;

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
