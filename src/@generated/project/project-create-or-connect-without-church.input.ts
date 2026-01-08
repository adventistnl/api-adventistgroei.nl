import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutChurchInput } from './project-create-without-church.input';

@InputType()
export class ProjectCreateOrConnectWithoutChurchInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutChurchInput, {nullable:false})
    @Type(() => ProjectCreateWithoutChurchInput)
    create!: ProjectCreateWithoutChurchInput;
}
