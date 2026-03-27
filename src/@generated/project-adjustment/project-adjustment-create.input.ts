import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentStatus } from '../prisma/adjustment-status.enum';
import { ProjectHistoryCreateNestedOneWithoutAdjustmentInput } from '../project-history/project-history-create-nested-one-without-adjustment.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskCreateNestedManyWithoutAdjustmentInput } from '../adjustment-task/adjustment-task-create-nested-many-without-adjustment.input';

@InputType()
export class ProjectAdjustmentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AdjustmentStatus, {nullable:true})
    status?: `${AdjustmentStatus}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => ProjectHistoryCreateNestedOneWithoutAdjustmentInput, {nullable:false})
    @Type(() => ProjectHistoryCreateNestedOneWithoutAdjustmentInput)
    project_history!: ProjectHistoryCreateNestedOneWithoutAdjustmentInput;

    @Field(() => AdjustmentTaskCreateNestedManyWithoutAdjustmentInput, {nullable:true})
    tasks?: AdjustmentTaskCreateNestedManyWithoutAdjustmentInput;
}
