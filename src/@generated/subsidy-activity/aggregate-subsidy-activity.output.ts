import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubsidyActivityCountAggregate } from './subsidy-activity-count-aggregate.output';
import { SubsidyActivityAvgAggregate } from './subsidy-activity-avg-aggregate.output';
import { SubsidyActivitySumAggregate } from './subsidy-activity-sum-aggregate.output';
import { SubsidyActivityMinAggregate } from './subsidy-activity-min-aggregate.output';
import { SubsidyActivityMaxAggregate } from './subsidy-activity-max-aggregate.output';

@ObjectType()
export class AggregateSubsidyActivity {

    @Field(() => SubsidyActivityCountAggregate, {nullable:true})
    _count?: SubsidyActivityCountAggregate;

    @Field(() => SubsidyActivityAvgAggregate, {nullable:true})
    _avg?: SubsidyActivityAvgAggregate;

    @Field(() => SubsidyActivitySumAggregate, {nullable:true})
    _sum?: SubsidyActivitySumAggregate;

    @Field(() => SubsidyActivityMinAggregate, {nullable:true})
    _min?: SubsidyActivityMinAggregate;

    @Field(() => SubsidyActivityMaxAggregate, {nullable:true})
    _max?: SubsidyActivityMaxAggregate;
}
