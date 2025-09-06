import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnnualReportCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    department_id!: number;

    @Field(() => Int, {nullable:false})
    text!: number;

    @Field(() => Int, {nullable:false})
    file_path!: number;

    @Field(() => Int, {nullable:false})
    submission_date!: number;

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
