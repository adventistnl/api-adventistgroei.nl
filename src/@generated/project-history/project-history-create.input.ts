import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryType } from '../prisma/project-history-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectCreateNestedOneWithoutHistoryInput } from '../project/project-create-nested-one-without-history.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutProject_historyInput } from '../user/user-create-nested-one-without-project-history.input';
import { ProjectAdjustmentCreateNestedOneWithoutProject_historyInput } from '../project-adjustment/project-adjustment-create-nested-one-without-project-history.input';

@InputType()
export class ProjectHistoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => ProjectCreateNestedOneWithoutHistoryInput, {nullable:false})
    @Type(() => ProjectCreateNestedOneWithoutHistoryInput)
    project!: ProjectCreateNestedOneWithoutHistoryInput;

    @Field(() => UserCreateNestedOneWithoutProject_historyInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutProject_historyInput)
    user!: UserCreateNestedOneWithoutProject_historyInput;

    @Field(() => ProjectAdjustmentCreateNestedOneWithoutProject_historyInput, {nullable:true})
    adjustment?: ProjectAdjustmentCreateNestedOneWithoutProject_historyInput;
}
