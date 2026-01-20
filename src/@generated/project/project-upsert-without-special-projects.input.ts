import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutSpecial_projectsInput } from './project-update-without-special-projects.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutSpecial_projectsInput } from './project-create-without-special-projects.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutSpecial_projectsInput {

    @Field(() => ProjectUpdateWithoutSpecial_projectsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutSpecial_projectsInput)
    update!: ProjectUpdateWithoutSpecial_projectsInput;

    @Field(() => ProjectCreateWithoutSpecial_projectsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutSpecial_projectsInput)
    create!: ProjectCreateWithoutSpecial_projectsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
