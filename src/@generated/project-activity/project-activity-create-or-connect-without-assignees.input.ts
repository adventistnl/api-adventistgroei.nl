import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutAssigneesInput } from './project-activity-create-without-assignees.input';

@InputType()
export class ProjectActivityCreateOrConnectWithoutAssigneesInput {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityCreateWithoutAssigneesInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutAssigneesInput)
    create!: ProjectActivityCreateWithoutAssigneesInput;
}
