import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectAdjustmentUpdateWithoutProject_historyInput } from './project-adjustment-update-without-project-history.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentCreateWithoutProject_historyInput } from './project-adjustment-create-without-project-history.input';
import { ProjectAdjustmentWhereInput } from './project-adjustment-where.input';

@InputType()
export class ProjectAdjustmentUpsertWithoutProject_historyInput {

    @Field(() => ProjectAdjustmentUpdateWithoutProject_historyInput, {nullable:false})
    @Type(() => ProjectAdjustmentUpdateWithoutProject_historyInput)
    update!: ProjectAdjustmentUpdateWithoutProject_historyInput;

    @Field(() => ProjectAdjustmentCreateWithoutProject_historyInput, {nullable:false})
    @Type(() => ProjectAdjustmentCreateWithoutProject_historyInput)
    create!: ProjectAdjustmentCreateWithoutProject_historyInput;

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereInput)
    where?: ProjectAdjustmentWhereInput;
}
