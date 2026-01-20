import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutChurch_departmentInput } from './project-create-without-church-department.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutChurch_departmentInput } from './project-create-or-connect-without-church-department.input';
import { ProjectCreateManyChurch_departmentInputEnvelope } from './project-create-many-church-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectUncheckedCreateNestedManyWithoutChurch_departmentInput {

    @Field(() => [ProjectCreateWithoutChurch_departmentInput], {nullable:true})
    @Type(() => ProjectCreateWithoutChurch_departmentInput)
    create?: Array<ProjectCreateWithoutChurch_departmentInput>;

    @Field(() => [ProjectCreateOrConnectWithoutChurch_departmentInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutChurch_departmentInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutChurch_departmentInput>;

    @Field(() => ProjectCreateManyChurch_departmentInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyChurch_departmentInputEnvelope)
    createMany?: ProjectCreateManyChurch_departmentInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
}
