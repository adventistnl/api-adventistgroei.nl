import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProjectActivity } from '../project-activity/project-activity.model';
import { User } from '../user/user.model';

@ObjectType()
export class ProjectActivityAssignee {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => ProjectActivity, {nullable:false})
    activity?: ProjectActivity;

    @Field(() => User, {nullable:false})
    user?: User;
}
