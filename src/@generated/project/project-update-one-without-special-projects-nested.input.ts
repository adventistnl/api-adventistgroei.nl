import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutSpecial_projectsInput } from './project-create-without-special-projects.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutSpecial_projectsInput } from './project-create-or-connect-without-special-projects.input';
import { ProjectUpsertWithoutSpecial_projectsInput } from './project-upsert-without-special-projects.input';
import { ProjectWhereInput } from './project-where.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutSpecial_projectsInput } from './project-update-to-one-with-where-without-special-projects.input';

@InputType()
export class ProjectUpdateOneWithoutSpecial_projectsNestedInput {

    @Field(() => ProjectCreateWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutSpecial_projectsInput)
    create?: ProjectCreateWithoutSpecial_projectsInput;

    @Field(() => ProjectCreateOrConnectWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutSpecial_projectsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutSpecial_projectsInput;

    @Field(() => ProjectUpsertWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutSpecial_projectsInput)
    upsert?: ProjectUpsertWithoutSpecial_projectsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    disconnect?: ProjectWhereInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    delete?: ProjectWhereInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutSpecial_projectsInput)
    update?: ProjectUpdateToOneWithWhereWithoutSpecial_projectsInput;
}
