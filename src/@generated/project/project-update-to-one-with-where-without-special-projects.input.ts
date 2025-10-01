import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutSpecial_projectsInput } from './project-update-without-special-projects.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutSpecial_projectsInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutSpecial_projectsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutSpecial_projectsInput)
    data!: ProjectUpdateWithoutSpecial_projectsInput;
}
