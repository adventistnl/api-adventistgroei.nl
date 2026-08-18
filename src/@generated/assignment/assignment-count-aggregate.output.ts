import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssignmentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    institution_id!: number;

    @Field(() => Int, {nullable:false})
    church_id!: number;

    @Field(() => Int, {nullable:false})
    date!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    origin!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    locked_at!: number;

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
