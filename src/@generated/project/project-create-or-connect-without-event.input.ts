import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutEventInput } from './project-create-without-event.input';

@InputType()
export class ProjectCreateOrConnectWithoutEventInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutEventInput, {nullable:false})
    @Type(() => ProjectCreateWithoutEventInput)
    create!: ProjectCreateWithoutEventInput;
}
