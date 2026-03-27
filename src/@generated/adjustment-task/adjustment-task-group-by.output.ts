import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AdjustmentTaskCountAggregate } from './adjustment-task-count-aggregate.output';
import { AdjustmentTaskAvgAggregate } from './adjustment-task-avg-aggregate.output';
import { AdjustmentTaskSumAggregate } from './adjustment-task-sum-aggregate.output';
import { AdjustmentTaskMinAggregate } from './adjustment-task-min-aggregate.output';
import { AdjustmentTaskMaxAggregate } from './adjustment-task-max-aggregate.output';

@ObjectType()
export class AdjustmentTaskGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    adjustment_id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    completed!: boolean;

    @Field(() => Int, {nullable:false})
    position!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => AdjustmentTaskCountAggregate, {nullable:true})
    _count?: AdjustmentTaskCountAggregate;

    @Field(() => AdjustmentTaskAvgAggregate, {nullable:true})
    _avg?: AdjustmentTaskAvgAggregate;

    @Field(() => AdjustmentTaskSumAggregate, {nullable:true})
    _sum?: AdjustmentTaskSumAggregate;

    @Field(() => AdjustmentTaskMinAggregate, {nullable:true})
    _min?: AdjustmentTaskMinAggregate;

    @Field(() => AdjustmentTaskMaxAggregate, {nullable:true})
    _max?: AdjustmentTaskMaxAggregate;
}
