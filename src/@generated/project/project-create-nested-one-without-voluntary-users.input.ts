import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutVoluntary_usersInput } from './project-create-without-voluntary-users.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutVoluntary_usersInput } from './project-create-or-connect-without-voluntary-users.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutVoluntary_usersInput {

    @Field(() => ProjectCreateWithoutVoluntary_usersInput, {nullable:true})
    @Type(() => ProjectCreateWithoutVoluntary_usersInput)
    create?: ProjectCreateWithoutVoluntary_usersInput;

    @Field(() => ProjectCreateOrConnectWithoutVoluntary_usersInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutVoluntary_usersInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutVoluntary_usersInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
