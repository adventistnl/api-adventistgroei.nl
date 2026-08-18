import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssignmentHistoryCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    assignment_id!: number;

    @Field(() => Int, {nullable:false})
    field_name!: number;

    @Field(() => Int, {nullable:false})
    old_value!: number;

    @Field(() => Int, {nullable:false})
    new_value!: number;

    @Field(() => Int, {nullable:false})
    changed_by!: number;

    @Field(() => Int, {nullable:false})
    changed_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
