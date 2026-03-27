import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectAdjustmentCreateWithoutTasksInput } from './project-adjustment-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentCreateOrConnectWithoutTasksInput } from './project-adjustment-create-or-connect-without-tasks.input';
import { Prisma } from '@prisma/client';
import { ProjectAdjustmentWhereUniqueInput } from './project-adjustment-where-unique.input';

@InputType()
export class ProjectAdjustmentCreateNestedOneWithoutTasksInput {

    @Field(() => ProjectAdjustmentCreateWithoutTasksInput, {nullable:true})
    @Type(() => ProjectAdjustmentCreateWithoutTasksInput)
    create?: ProjectAdjustmentCreateWithoutTasksInput;

    @Field(() => ProjectAdjustmentCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ProjectAdjustmentCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ProjectAdjustmentCreateOrConnectWithoutTasksInput;

    @Field(() => ProjectAdjustmentWhereUniqueInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectAdjustmentWhereUniqueInput, 'id' | 'project_history_id'>;
}
