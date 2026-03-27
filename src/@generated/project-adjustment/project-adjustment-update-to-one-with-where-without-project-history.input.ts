import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectAdjustmentWhereInput } from './project-adjustment-where.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentUpdateWithoutProject_historyInput } from './project-adjustment-update-without-project-history.input';

@InputType()
export class ProjectAdjustmentUpdateToOneWithWhereWithoutProject_historyInput {

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereInput)
    where?: ProjectAdjustmentWhereInput;

    @Field(() => ProjectAdjustmentUpdateWithoutProject_historyInput, {nullable:false})
    @Type(() => ProjectAdjustmentUpdateWithoutProject_historyInput)
    data!: ProjectAdjustmentUpdateWithoutProject_historyInput;
}
