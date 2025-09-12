import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectActivityCountAggregate } from './project-activity-count-aggregate.output';
import { ProjectActivityAvgAggregate } from './project-activity-avg-aggregate.output';
import { ProjectActivitySumAggregate } from './project-activity-sum-aggregate.output';
import { ProjectActivityMinAggregate } from './project-activity-min-aggregate.output';
import { ProjectActivityMaxAggregate } from './project-activity-max-aggregate.output';

@ObjectType()
export class AggregateProjectActivity {

    @Field(() => ProjectActivityCountAggregate, {nullable:true})
    _count?: ProjectActivityCountAggregate;

    @Field(() => ProjectActivityAvgAggregate, {nullable:true})
    _avg?: ProjectActivityAvgAggregate;

    @Field(() => ProjectActivitySumAggregate, {nullable:true})
    _sum?: ProjectActivitySumAggregate;

    @Field(() => ProjectActivityMinAggregate, {nullable:true})
    _min?: ProjectActivityMinAggregate;

    @Field(() => ProjectActivityMaxAggregate, {nullable:true})
    _max?: ProjectActivityMaxAggregate;
}
