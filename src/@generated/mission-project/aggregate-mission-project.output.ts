import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MissionProjectCountAggregate } from './mission-project-count-aggregate.output';
import { MissionProjectAvgAggregate } from './mission-project-avg-aggregate.output';
import { MissionProjectSumAggregate } from './mission-project-sum-aggregate.output';
import { MissionProjectMinAggregate } from './mission-project-min-aggregate.output';
import { MissionProjectMaxAggregate } from './mission-project-max-aggregate.output';

@ObjectType()
export class AggregateMissionProject {

    @Field(() => MissionProjectCountAggregate, {nullable:true})
    _count?: MissionProjectCountAggregate;

    @Field(() => MissionProjectAvgAggregate, {nullable:true})
    _avg?: MissionProjectAvgAggregate;

    @Field(() => MissionProjectSumAggregate, {nullable:true})
    _sum?: MissionProjectSumAggregate;

    @Field(() => MissionProjectMinAggregate, {nullable:true})
    _min?: MissionProjectMinAggregate;

    @Field(() => MissionProjectMaxAggregate, {nullable:true})
    _max?: MissionProjectMaxAggregate;
}
