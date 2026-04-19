import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentStatus } from '../prisma/adjustment-status.enum';
import { AdjustmentTaskCreateNestedManyWithoutAdjustmentInput } from '../adjustment-task/adjustment-task-create-nested-many-without-adjustment.input';

@InputType()
export class ProjectAdjustmentCreateWithoutProject_historyInput {

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

    @Field(() => AdjustmentTaskCreateNestedManyWithoutAdjustmentInput, {nullable:true})
    tasks?: AdjustmentTaskCreateNestedManyWithoutAdjustmentInput;
}
