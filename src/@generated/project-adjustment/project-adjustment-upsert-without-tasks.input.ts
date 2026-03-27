import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectAdjustmentUpdateWithoutTasksInput } from './project-adjustment-update-without-tasks.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentCreateWithoutTasksInput } from './project-adjustment-create-without-tasks.input';
import { ProjectAdjustmentWhereInput } from './project-adjustment-where.input';

@InputType()
export class ProjectAdjustmentUpsertWithoutTasksInput {

    @Field(() => ProjectAdjustmentUpdateWithoutTasksInput, {nullable:false})
    @Type(() => ProjectAdjustmentUpdateWithoutTasksInput)
    update!: ProjectAdjustmentUpdateWithoutTasksInput;

    @Field(() => ProjectAdjustmentCreateWithoutTasksInput, {nullable:false})
    @Type(() => ProjectAdjustmentCreateWithoutTasksInput)
    create!: ProjectAdjustmentCreateWithoutTasksInput;

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereInput)
    where?: ProjectAdjustmentWhereInput;
}
