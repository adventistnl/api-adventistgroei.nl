import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryType } from '../prisma/project-history-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectAdjustmentUncheckedCreateNestedOneWithoutProject_historyInput } from '../project-adjustment/project-adjustment-unchecked-create-nested-one-without-project-history.input';

@InputType()
export class ProjectHistoryUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

    @Field(() => ProjectHistoryType, {nullable:false})
    type!: `${ProjectHistoryType}`;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    field_name?: string;

    @Field(() => String, {nullable:true})
    old_value?: string;

    @Field(() => String, {nullable:true})
    new_value?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => ProjectAdjustmentUncheckedCreateNestedOneWithoutProject_historyInput, {nullable:true})
    adjustment?: ProjectAdjustmentUncheckedCreateNestedOneWithoutProject_historyInput;
}
