import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutVoluntary_projectsInput } from '../user/user-create-nested-one-without-voluntary-projects.input';
import { Type } from 'class-transformer';
import { ProjectCreateNestedOneWithoutVoluntary_usersInput } from '../project/project-create-nested-one-without-voluntary-users.input';

@InputType()
export class VoluntariesOnProjectsCreateInput {

    @Field(() => UserCreateNestedOneWithoutVoluntary_projectsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutVoluntary_projectsInput)
    user!: UserCreateNestedOneWithoutVoluntary_projectsInput;

    @Field(() => ProjectCreateNestedOneWithoutVoluntary_usersInput, {nullable:false})
    @Type(() => ProjectCreateNestedOneWithoutVoluntary_usersInput)
    project!: ProjectCreateNestedOneWithoutVoluntary_usersInput;
}
