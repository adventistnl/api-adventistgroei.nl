import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogAction } from '../prisma/project-activity-log-action.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectActivityCreateNestedOneWithoutLogsInput } from '../project-activity/project-activity-create-nested-one-without-logs.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityLogCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProjectActivityLogAction, {nullable:false})
    action!: `${ProjectActivityLogAction}`;

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

    @Field(() => ProjectActivityCreateNestedOneWithoutLogsInput, {nullable:false})
    @Type(() => ProjectActivityCreateNestedOneWithoutLogsInput)
    activity!: ProjectActivityCreateNestedOneWithoutLogsInput;
}
