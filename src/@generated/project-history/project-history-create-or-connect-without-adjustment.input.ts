import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateWithoutAdjustmentInput } from './project-history-create-without-adjustment.input';

@InputType()
export class ProjectHistoryCreateOrConnectWithoutAdjustmentInput {

    @Field(() => ProjectHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ProjectHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>;

    @Field(() => ProjectHistoryCreateWithoutAdjustmentInput, {nullable:false})
    @Type(() => ProjectHistoryCreateWithoutAdjustmentInput)
    create!: ProjectHistoryCreateWithoutAdjustmentInput;
}
