import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutVoluntary_projectsNestedInput } from '../user/user-update-one-required-without-voluntary-projects-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class VoluntariesOnProjectsUpdateWithoutProjectInput {

    @Field(() => UserUpdateOneRequiredWithoutVoluntary_projectsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutVoluntary_projectsNestedInput)
    user?: UserUpdateOneRequiredWithoutVoluntary_projectsNestedInput;
}
