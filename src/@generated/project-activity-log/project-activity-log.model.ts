import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProjectActivityLogAction } from '../prisma/project-activity-log-action.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectActivity } from '../project-activity/project-activity.model';
import { User } from '../user/user.model';

@ObjectType()
export class ProjectActivityLog {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => ProjectActivityLogAction, {nullable:false})
    action!: `${ProjectActivityLogAction}`;

    @Field(() => String, {nullable:true})
    field_name!: string | null;

    @Field(() => String, {nullable:true})
    old_value!: string | null;

    @Field(() => String, {nullable:true})
    new_value!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => ProjectActivity, {nullable:false})
    activity?: ProjectActivity;

    @Field(() => User, {nullable:false})
    user?: User;
}
