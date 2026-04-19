import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdjustmentTaskCountAggregate } from './adjustment-task-count-aggregate.output';
import { AdjustmentTaskAvgAggregate } from './adjustment-task-avg-aggregate.output';
import { AdjustmentTaskSumAggregate } from './adjustment-task-sum-aggregate.output';
import { AdjustmentTaskMinAggregate } from './adjustment-task-min-aggregate.output';
import { AdjustmentTaskMaxAggregate } from './adjustment-task-max-aggregate.output';

@ObjectType()
export class AggregateAdjustmentTask {

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
