import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutVoluntary_usersInput } from './project-update-without-voluntary-users.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutVoluntary_usersInput } from './project-create-without-voluntary-users.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutVoluntary_usersInput {

    @Field(() => ProjectUpdateWithoutVoluntary_usersInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutVoluntary_usersInput)
    update!: ProjectUpdateWithoutVoluntary_usersInput;

    @Field(() => ProjectCreateWithoutVoluntary_usersInput, {nullable:false})
    @Type(() => ProjectCreateWithoutVoluntary_usersInput)
    create!: ProjectCreateWithoutVoluntary_usersInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
