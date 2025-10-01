import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActivityDocumentsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    activity_id!: number;

    @Field(() => Int, {nullable:false})
    file_url!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    is_validated!: number;

    @Field(() => Int, {nullable:false})
    uploaded_by!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    validated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
