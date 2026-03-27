import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectAdjustmentCountAggregate } from './project-adjustment-count-aggregate.output';
import { ProjectAdjustmentMinAggregate } from './project-adjustment-min-aggregate.output';
import { ProjectAdjustmentMaxAggregate } from './project-adjustment-max-aggregate.output';

@ObjectType()
export class AggregateProjectAdjustment {

    @Field(() => ProjectAdjustmentCountAggregate, {nullable:true})
    _count?: ProjectAdjustmentCountAggregate;

    @Field(() => ProjectAdjustmentMinAggregate, {nullable:true})
    _min?: ProjectAdjustmentMinAggregate;

    @Field(() => ProjectAdjustmentMaxAggregate, {nullable:true})
    _max?: ProjectAdjustmentMaxAggregate;
}
