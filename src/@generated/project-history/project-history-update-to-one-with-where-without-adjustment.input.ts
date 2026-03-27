import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryWhereInput } from './project-history-where.input';
import { Type } from 'class-transformer';
import { ProjectHistoryUpdateWithoutAdjustmentInput } from './project-history-update-without-adjustment.input';

@InputType()
export class ProjectHistoryUpdateToOneWithWhereWithoutAdjustmentInput {

    @Field(() => ProjectHistoryWhereInput, {nullable:true})
    @Type(() => ProjectHistoryWhereInput)
    where?: ProjectHistoryWhereInput;

    @Field(() => ProjectHistoryUpdateWithoutAdjustmentInput, {nullable:false})
    @Type(() => ProjectHistoryUpdateWithoutAdjustmentInput)
    data!: ProjectHistoryUpdateWithoutAdjustmentInput;
}
