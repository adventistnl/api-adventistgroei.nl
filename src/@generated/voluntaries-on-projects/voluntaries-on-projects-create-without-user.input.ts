import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateNestedOneWithoutVoluntary_usersInput } from '../project/project-create-nested-one-without-voluntary-users.input';
import { Type } from 'class-transformer';

@InputType()
export class VoluntariesOnProjectsCreateWithoutUserInput {

    @Field(() => ProjectCreateNestedOneWithoutVoluntary_usersInput, {nullable:false})
    @Type(() => ProjectCreateNestedOneWithoutVoluntary_usersInput)
    project!: ProjectCreateNestedOneWithoutVoluntary_usersInput;
}
