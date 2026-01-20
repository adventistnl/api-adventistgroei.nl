import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutSpecial_projectsInput } from './project-create-without-special-projects.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutSpecial_projectsInput } from './project-create-or-connect-without-special-projects.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutSpecial_projectsInput {

    @Field(() => ProjectCreateWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutSpecial_projectsInput)
    create?: ProjectCreateWithoutSpecial_projectsInput;

    @Field(() => ProjectCreateOrConnectWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutSpecial_projectsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutSpecial_projectsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
