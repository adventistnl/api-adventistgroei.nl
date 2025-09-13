import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutEventInput } from './project-update-without-event.input';
import { ProjectCreateWithoutEventInput } from './project-create-without-event.input';

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutEventInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateWithoutEventInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutEventInput)
    update!: ProjectUpdateWithoutEventInput;

    @Field(() => ProjectCreateWithoutEventInput, {nullable:false})
    @Type(() => ProjectCreateWithoutEventInput)
    create!: ProjectCreateWithoutEventInput;
}
