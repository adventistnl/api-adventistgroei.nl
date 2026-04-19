import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectAdjustmentWhereUniqueInput } from './project-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentCreateWithoutProject_historyInput } from './project-adjustment-create-without-project-history.input';

@InputType()
export class ProjectAdjustmentCreateOrConnectWithoutProject_historyInput {

    @Field(() => ProjectAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ProjectAdjustmentWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectAdjustmentWhereUniqueInput, 'id' | 'project_history_id'>;

    @Field(() => ProjectAdjustmentCreateWithoutProject_historyInput, {nullable:false})
    @Type(() => ProjectAdjustmentCreateWithoutProject_historyInput)
    create!: ProjectAdjustmentCreateWithoutProject_historyInput;
}
