import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutChurch_departmentInput } from './project-create-without-church-department.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutChurch_departmentInput } from './project-create-or-connect-without-church-department.input';
import { ProjectUpsertWithWhereUniqueWithoutChurch_departmentInput } from './project-upsert-with-where-unique-without-church-department.input';
import { ProjectCreateManyChurch_departmentInputEnvelope } from './project-create-many-church-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutChurch_departmentInput } from './project-update-with-where-unique-without-church-department.input';
import { ProjectUpdateManyWithWhereWithoutChurch_departmentInput } from './project-update-many-with-where-without-church-department.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUpdateManyWithoutChurch_departmentNestedInput {

    @Field(() => [ProjectCreateWithoutChurch_departmentInput], {nullable:true})
    @Type(() => ProjectCreateWithoutChurch_departmentInput)
    create?: Array<ProjectCreateWithoutChurch_departmentInput>;

    @Field(() => [ProjectCreateOrConnectWithoutChurch_departmentInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutChurch_departmentInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutChurch_departmentInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutChurch_departmentInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutChurch_departmentInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutChurch_departmentInput>;

    @Field(() => ProjectCreateManyChurch_departmentInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyChurch_departmentInputEnvelope)
    createMany?: ProjectCreateManyChurch_departmentInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutChurch_departmentInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutChurch_departmentInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutChurch_departmentInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutChurch_departmentInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutChurch_departmentInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutChurch_departmentInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
