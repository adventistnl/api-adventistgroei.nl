import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutDepartmentInput } from './project-create-without-department.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutDepartmentInput } from './project-create-or-connect-without-department.input';
import { ProjectCreateManyDepartmentInputEnvelope } from './project-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectUncheckedCreateNestedManyWithoutDepartmentInput {

    @Field(() => [ProjectCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => ProjectCreateWithoutDepartmentInput)
    create?: Array<ProjectCreateWithoutDepartmentInput>;

    @Field(() => [ProjectCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutDepartmentInput>;

    @Field(() => ProjectCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyDepartmentInputEnvelope)
    createMany?: ProjectCreateManyDepartmentInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
}
