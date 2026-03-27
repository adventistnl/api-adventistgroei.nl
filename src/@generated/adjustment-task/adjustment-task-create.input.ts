import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProjectAdjustmentCreateNestedOneWithoutTasksInput } from '../project-adjustment/project-adjustment-create-nested-one-without-tasks.input';

@InputType()
export class AdjustmentTaskCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;

    @Field(() => Int, {nullable:true})
    position?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ProjectAdjustmentCreateNestedOneWithoutTasksInput, {nullable:false})
    adjustment!: ProjectAdjustmentCreateNestedOneWithoutTasksInput;
}
