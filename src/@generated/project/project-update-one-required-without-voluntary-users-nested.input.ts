import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutVoluntary_usersInput } from './project-create-without-voluntary-users.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutVoluntary_usersInput } from './project-create-or-connect-without-voluntary-users.input';
import { ProjectUpsertWithoutVoluntary_usersInput } from './project-upsert-without-voluntary-users.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutVoluntary_usersInput } from './project-update-to-one-with-where-without-voluntary-users.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutVoluntary_usersNestedInput {

    @Field(() => ProjectCreateWithoutVoluntary_usersInput, {nullable:true})
    @Type(() => ProjectCreateWithoutVoluntary_usersInput)
    create?: ProjectCreateWithoutVoluntary_usersInput;

    @Field(() => ProjectCreateOrConnectWithoutVoluntary_usersInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutVoluntary_usersInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutVoluntary_usersInput;

    @Field(() => ProjectUpsertWithoutVoluntary_usersInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutVoluntary_usersInput)
    upsert?: ProjectUpsertWithoutVoluntary_usersInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutVoluntary_usersInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutVoluntary_usersInput)
    update?: ProjectUpdateToOneWithWhereWithoutVoluntary_usersInput;
}
