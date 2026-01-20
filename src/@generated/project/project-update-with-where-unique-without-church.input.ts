import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutChurchInput } from './project-update-without-church.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutChurchInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateWithoutChurchInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutChurchInput)
    data!: ProjectUpdateWithoutChurchInput;
}
