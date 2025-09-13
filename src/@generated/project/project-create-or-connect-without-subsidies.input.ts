import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutSubsidiesInput } from './project-create-without-subsidies.input';

@InputType()
export class ProjectCreateOrConnectWithoutSubsidiesInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutSubsidiesInput, {nullable:false})
    @Type(() => ProjectCreateWithoutSubsidiesInput)
    create!: ProjectCreateWithoutSubsidiesInput;
}
