import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutHistoryInput } from './project-create-without-history.input';

@InputType()
export class ProjectCreateOrConnectWithoutHistoryInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutHistoryInput, {nullable:false})
    @Type(() => ProjectCreateWithoutHistoryInput)
    create!: ProjectCreateWithoutHistoryInput;
}
