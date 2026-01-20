import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    department_id!: number;

    @Field(() => Int, {nullable:false})
    church_department_id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    budget!: number;

    @Field(() => Int, {nullable:false})
    subsidized_budget!: number;

    @Field(() => Int, {nullable:false})
    balance!: number;

    @Field(() => Int, {nullable:false})
    owner_id!: number;

    @Field(() => Int, {nullable:false})
    language_preference!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    is_private!: number;

    @Field(() => Int, {nullable:false})
    required_volunteers!: number;

    @Field(() => Int, {nullable:false})
    start_at!: number;

    @Field(() => Int, {nullable:false})
    end_at!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    deadline!: number;

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
    event_id!: number;

    @Field(() => Int, {nullable:false})
    institution_id!: number;

    @Field(() => Int, {nullable:false})
    church_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
