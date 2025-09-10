import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutInstitutionInput } from './project-create-without-institution.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutInstitutionInput } from './project-create-or-connect-without-institution.input';
import { ProjectCreateManyInstitutionInputEnvelope } from './project-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutInstitutionInput {

    @Field(() => [ProjectCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => ProjectCreateWithoutInstitutionInput)
    create?: Array<ProjectCreateWithoutInstitutionInput>;

    @Field(() => [ProjectCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutInstitutionInput>;

    @Field(() => ProjectCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyInstitutionInputEnvelope)
    createMany?: ProjectCreateManyInstitutionInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
}
