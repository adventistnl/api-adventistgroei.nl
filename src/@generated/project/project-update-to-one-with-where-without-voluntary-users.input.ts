import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutVoluntary_usersInput } from './project-update-without-voluntary-users.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutVoluntary_usersInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutVoluntary_usersInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutVoluntary_usersInput)
    data!: ProjectUpdateWithoutVoluntary_usersInput;
}
