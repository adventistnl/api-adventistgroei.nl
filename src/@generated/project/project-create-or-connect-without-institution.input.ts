import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutInstitutionInput } from './project-create-without-institution.input';

@InputType()
export class ProjectCreateOrConnectWithoutInstitutionInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => ProjectCreateWithoutInstitutionInput)
    create!: ProjectCreateWithoutInstitutionInput;
}
