import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutInstitutionInput } from './project-update-without-institution.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutInstitutionInput)
    data!: ProjectUpdateWithoutInstitutionInput;
}
