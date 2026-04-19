import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AdjustmentStatus } from '../prisma/adjustment-status.enum';
import { ProjectHistory } from '../project-history/project-history.model';
import { AdjustmentTask } from '../adjustment-task/adjustment-task.model';
import { ProjectAdjustmentCount } from './project-adjustment-count.output';

@ObjectType()
export class ProjectAdjustment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    project_history_id!: string;

    @Field(() => AdjustmentStatus, {defaultValue:'OPEN',nullable:false})
    status!: `${AdjustmentStatus}`;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => ProjectHistory, {nullable:false})
    project_history?: ProjectHistory;

    @Field(() => [AdjustmentTask], {nullable:true})
    tasks?: Array<AdjustmentTask>;

    @Field(() => ProjectAdjustmentCount, {nullable:false})
    _count?: ProjectAdjustmentCount;
}
