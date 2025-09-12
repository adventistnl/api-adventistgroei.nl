import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutActivitiesInput } from './project-create-without-activities.input';

@InputType()
export class ProjectCreateOrConnectWithoutActivitiesInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutActivitiesInput, {nullable:false})
    @Type(() => ProjectCreateWithoutActivitiesInput)
    create!: ProjectCreateWithoutActivitiesInput;
}
