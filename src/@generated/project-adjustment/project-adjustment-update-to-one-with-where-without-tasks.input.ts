import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectAdjustmentWhereInput } from './project-adjustment-where.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentUpdateWithoutTasksInput } from './project-adjustment-update-without-tasks.input';

@InputType()
export class ProjectAdjustmentUpdateToOneWithWhereWithoutTasksInput {

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereInput)
    where?: ProjectAdjustmentWhereInput;

    @Field(() => ProjectAdjustmentUpdateWithoutTasksInput, {nullable:false})
    @Type(() => ProjectAdjustmentUpdateWithoutTasksInput)
    data!: ProjectAdjustmentUpdateWithoutTasksInput;
}
