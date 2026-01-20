import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SpecialProjectsCountAggregate } from './special-projects-count-aggregate.output';
import { SpecialProjectsAvgAggregate } from './special-projects-avg-aggregate.output';
import { SpecialProjectsSumAggregate } from './special-projects-sum-aggregate.output';
import { SpecialProjectsMinAggregate } from './special-projects-min-aggregate.output';
import { SpecialProjectsMaxAggregate } from './special-projects-max-aggregate.output';

@ObjectType()
export class AggregateSpecialProjects {

    @Field(() => SpecialProjectsCountAggregate, {nullable:true})
    _count?: SpecialProjectsCountAggregate;

    @Field(() => SpecialProjectsAvgAggregate, {nullable:true})
    _avg?: SpecialProjectsAvgAggregate;

    @Field(() => SpecialProjectsSumAggregate, {nullable:true})
    _sum?: SpecialProjectsSumAggregate;

    @Field(() => SpecialProjectsMinAggregate, {nullable:true})
    _min?: SpecialProjectsMinAggregate;

    @Field(() => SpecialProjectsMaxAggregate, {nullable:true})
    _max?: SpecialProjectsMaxAggregate;
}
