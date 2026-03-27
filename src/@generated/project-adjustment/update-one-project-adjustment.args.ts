import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectAdjustmentUpdateInput } from './project-adjustment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProjectAdjustmentWhereUniqueInput } from './project-adjustment-where-unique.input';

@ArgsType()
export class UpdateOneProjectAdjustmentArgs {

    @Field(() => ProjectAdjustmentUpdateInput, {nullable:false})
    @Type(() => ProjectAdjustmentUpdateInput)
    data!: ProjectAdjustmentUpdateInput;

    @Field(() => ProjectAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ProjectAdjustmentWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectAdjustmentWhereUniqueInput, 'id' | 'project_history_id'>;
}
