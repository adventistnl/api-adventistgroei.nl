import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectAdjustmentWhereUniqueInput } from './project-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentCreateInput } from './project-adjustment-create.input';
import { ProjectAdjustmentUpdateInput } from './project-adjustment-update.input';

@ArgsType()
export class UpsertOneProjectAdjustmentArgs {

    @Field(() => ProjectAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ProjectAdjustmentWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectAdjustmentWhereUniqueInput, 'id' | 'project_history_id'>;

    @Field(() => ProjectAdjustmentCreateInput, {nullable:false})
    @Type(() => ProjectAdjustmentCreateInput)
    create!: ProjectAdjustmentCreateInput;

    @Field(() => ProjectAdjustmentUpdateInput, {nullable:false})
    @Type(() => ProjectAdjustmentUpdateInput)
    update!: ProjectAdjustmentUpdateInput;
}
