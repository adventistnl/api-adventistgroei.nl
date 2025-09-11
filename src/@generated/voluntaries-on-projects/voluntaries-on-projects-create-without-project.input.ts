import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutVoluntary_projectsInput } from '../user/user-create-nested-one-without-voluntary-projects.input';
import { Type } from 'class-transformer';

@InputType()
export class VoluntariesOnProjectsCreateWithoutProjectInput {

    @Field(() => UserCreateNestedOneWithoutVoluntary_projectsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutVoluntary_projectsInput)
    user!: UserCreateNestedOneWithoutVoluntary_projectsInput;
}
