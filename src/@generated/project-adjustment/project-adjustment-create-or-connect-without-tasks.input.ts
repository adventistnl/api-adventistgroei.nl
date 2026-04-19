import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectAdjustmentWhereUniqueInput } from './project-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentCreateWithoutTasksInput } from './project-adjustment-create-without-tasks.input';

@InputType()
export class ProjectAdjustmentCreateOrConnectWithoutTasksInput {

    @Field(() => ProjectAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ProjectAdjustmentWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectAdjustmentWhereUniqueInput, 'id' | 'project_history_id'>;

    @Field(() => ProjectAdjustmentCreateWithoutTasksInput, {nullable:false})
    @Type(() => ProjectAdjustmentCreateWithoutTasksInput)
    create!: ProjectAdjustmentCreateWithoutTasksInput;
}
