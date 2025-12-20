import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogAction } from '../prisma/project-activity-log-action.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutProject_activity_logsInput } from '../user/user-create-nested-one-without-project-activity-logs.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectActivityLogCreateWithoutActivityInput {

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

    @Field(() => UserCreateNestedOneWithoutProject_activity_logsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutProject_activity_logsInput)
    user!: UserCreateNestedOneWithoutProject_activity_logsInput;
}
