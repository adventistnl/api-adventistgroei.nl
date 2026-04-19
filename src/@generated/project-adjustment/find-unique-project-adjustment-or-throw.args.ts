import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectAdjustmentWhereUniqueInput } from './project-adjustment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProjectAdjustmentOrThrowArgs {

    @Field(() => ProjectAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ProjectAdjustmentWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectAdjustmentWhereUniqueInput, 'id' | 'project_history_id'>;
}
