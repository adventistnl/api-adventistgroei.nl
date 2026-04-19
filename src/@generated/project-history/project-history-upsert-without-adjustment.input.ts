import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryUpdateWithoutAdjustmentInput } from './project-history-update-without-adjustment.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateWithoutAdjustmentInput } from './project-history-create-without-adjustment.input';
import { ProjectHistoryWhereInput } from './project-history-where.input';

@InputType()
export class ProjectHistoryUpsertWithoutAdjustmentInput {

    @Field(() => ProjectHistoryUpdateWithoutAdjustmentInput, {nullable:false})
    @Type(() => ProjectHistoryUpdateWithoutAdjustmentInput)
    update!: ProjectHistoryUpdateWithoutAdjustmentInput;

    @Field(() => ProjectHistoryCreateWithoutAdjustmentInput, {nullable:false})
    @Type(() => ProjectHistoryCreateWithoutAdjustmentInput)
    create!: ProjectHistoryCreateWithoutAdjustmentInput;

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    @Type(() => ProjectHistoryWhereInput)
    where?: ProjectHistoryWhereInput;
}
