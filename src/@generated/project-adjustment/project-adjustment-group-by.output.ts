import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdjustmentStatus } from '../prisma/adjustment-status.enum';
import { ProjectAdjustmentCountAggregate } from './project-adjustment-count-aggregate.output';
import { ProjectAdjustmentMinAggregate } from './project-adjustment-min-aggregate.output';
import { ProjectAdjustmentMaxAggregate } from './project-adjustment-max-aggregate.output';

@ObjectType()
export class ProjectAdjustmentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    project_history_id!: string;

    @Field(() => AdjustmentStatus, {nullable:false})
    status!: `${AdjustmentStatus}`;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => ProjectAdjustmentCountAggregate, {nullable:true})
    _count?: ProjectAdjustmentCountAggregate;

    @Field(() => ProjectAdjustmentMinAggregate, {nullable:true})
    _min?: ProjectAdjustmentMinAggregate;

    @Field(() => ProjectAdjustmentMaxAggregate, {nullable:true})
    _max?: ProjectAdjustmentMaxAggregate;
}
