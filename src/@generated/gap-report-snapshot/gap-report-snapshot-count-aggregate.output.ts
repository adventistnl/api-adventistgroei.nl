import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GapReportSnapshotCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    institution_id!: number;

    @Field(() => Int, {nullable:false})
    month!: number;

    @Field(() => Int, {nullable:false})
    churches_without_preacher!: number;

    @Field(() => Int, {nullable:false})
    preachers_without_assignment!: number;

    @Field(() => Int, {nullable:false})
    computed_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
