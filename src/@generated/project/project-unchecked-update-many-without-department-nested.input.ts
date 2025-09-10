import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutDepartmentInput } from './project-create-without-department.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutDepartmentInput } from './project-create-or-connect-without-department.input';
import { ProjectUpsertWithWhereUniqueWithoutDepartmentInput } from './project-upsert-with-where-unique-without-department.input';
import { ProjectCreateManyDepartmentInputEnvelope } from './project-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutDepartmentInput } from './project-update-with-where-unique-without-department.input';
import { ProjectUpdateManyWithWhereWithoutDepartmentInput } from './project-update-many-with-where-without-department.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutDepartmentNestedInput {

    @Field(() => [ProjectCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => ProjectCreateWithoutDepartmentInput)
    create?: Array<ProjectCreateWithoutDepartmentInput>;

    @Field(() => [ProjectCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => ProjectCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyDepartmentInputEnvelope)
    createMany?: ProjectCreateManyDepartmentInputEnvelope;

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

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
