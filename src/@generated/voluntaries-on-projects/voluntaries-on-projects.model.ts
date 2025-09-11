import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Project } from '../project/project.model';

@ObjectType()
export class VoluntariesOnProjects {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Project, {nullable:false})
    project?: Project;
}
