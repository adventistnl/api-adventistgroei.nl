import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateOneRequiredWithoutVoluntary_usersNestedInput } from '../project/project-update-one-required-without-voluntary-users-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class VoluntariesOnProjectsUpdateWithoutUserInput {

    @Field(() => ProjectUpdateOneRequiredWithoutVoluntary_usersNestedInput, {nullable:true})
    @Type(() => ProjectUpdateOneRequiredWithoutVoluntary_usersNestedInput)
    project?: ProjectUpdateOneRequiredWithoutVoluntary_usersNestedInput;
}
