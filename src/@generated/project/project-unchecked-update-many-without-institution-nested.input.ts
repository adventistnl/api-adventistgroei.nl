import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutInstitutionInput } from './project-create-without-institution.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutInstitutionInput } from './project-create-or-connect-without-institution.input';
import { ProjectUpsertWithWhereUniqueWithoutInstitutionInput } from './project-upsert-with-where-unique-without-institution.input';
import { ProjectCreateManyInstitutionInputEnvelope } from './project-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutInstitutionInput } from './project-update-with-where-unique-without-institution.input';
import { ProjectUpdateManyWithWhereWithoutInstitutionInput } from './project-update-many-with-where-without-institution.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [ProjectCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => ProjectCreateWithoutInstitutionInput)
    create?: Array<ProjectCreateWithoutInstitutionInput>;

    @Field(() => [ProjectCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => ProjectCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyInstitutionInputEnvelope)
    createMany?: ProjectCreateManyInstitutionInputEnvelope;

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

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
