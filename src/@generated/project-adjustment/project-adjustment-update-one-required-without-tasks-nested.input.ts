import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectAdjustmentCreateWithoutTasksInput } from './project-adjustment-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentCreateOrConnectWithoutTasksInput } from './project-adjustment-create-or-connect-without-tasks.input';
import { ProjectAdjustmentUpsertWithoutTasksInput } from './project-adjustment-upsert-without-tasks.input';
import { Prisma } from '@prisma/client';
import { ProjectAdjustmentWhereUniqueInput } from './project-adjustment-where-unique.input';
import { ProjectAdjustmentUpdateToOneWithWhereWithoutTasksInput } from './project-adjustment-update-to-one-with-where-without-tasks.input';

@InputType()
export class ProjectAdjustmentUpdateOneRequiredWithoutTasksNestedInput {

    @Field(() => ProjectAdjustmentCreateWithoutTasksInput, {nullable:true})
    @Type(() => ProjectAdjustmentCreateWithoutTasksInput)
    create?: ProjectAdjustmentCreateWithoutTasksInput;

    @Field(() => ProjectAdjustmentCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ProjectAdjustmentCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ProjectAdjustmentCreateOrConnectWithoutTasksInput;

    @Field(() => ProjectAdjustmentUpsertWithoutTasksInput, {nullable:true})
    @Type(() => ProjectAdjustmentUpsertWithoutTasksInput)
    upsert?: ProjectAdjustmentUpsertWithoutTasksInput;

    @Field(() => ProjectAdjustmentWhereUniqueInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectAdjustmentWhereUniqueInput, 'id' | 'project_history_id'>;

    @Field(() => ProjectAdjustmentUpdateToOneWithWhereWithoutTasksInput, {nullable:true})
    @Type(() => ProjectAdjustmentUpdateToOneWithWhereWithoutTasksInput)
    update?: ProjectAdjustmentUpdateToOneWithWhereWithoutTasksInput;
}
