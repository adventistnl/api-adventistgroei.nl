import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutVoluntary_usersInput } from './project-create-without-voluntary-users.input';

@InputType()
export class ProjectCreateOrConnectWithoutVoluntary_usersInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutVoluntary_usersInput, {nullable:false})
    @Type(() => ProjectCreateWithoutVoluntary_usersInput)
    create!: ProjectCreateWithoutVoluntary_usersInput;
}
