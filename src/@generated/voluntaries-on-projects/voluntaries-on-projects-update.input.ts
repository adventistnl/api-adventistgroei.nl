import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutVoluntary_projectsNestedInput } from '../user/user-update-one-required-without-voluntary-projects-nested.input';
import { Type } from 'class-transformer';
import { ProjectUpdateOneRequiredWithoutVoluntary_usersNestedInput } from '../project/project-update-one-required-without-voluntary-users-nested.input';

@InputType()
export class VoluntariesOnProjectsUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutVoluntary_projectsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutVoluntary_projectsNestedInput)
    user?: UserUpdateOneRequiredWithoutVoluntary_projectsNestedInput;

    @Field(() => ProjectUpdateOneRequiredWithoutVoluntary_usersNestedInput, {nullable:true})
    @Type(() => ProjectUpdateOneRequiredWithoutVoluntary_usersNestedInput)
    project?: ProjectUpdateOneRequiredWithoutVoluntary_usersNestedInput;
}
