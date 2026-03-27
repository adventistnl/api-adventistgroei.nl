import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateWithoutUserInput } from './project-history-create-without-user.input';

@InputType()
export class ProjectHistoryCreateOrConnectWithoutUserInput {

    @Field(() => ProjectHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ProjectHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>;

    @Field(() => ProjectHistoryCreateWithoutUserInput, {nullable:false})
    @Type(() => ProjectHistoryCreateWithoutUserInput)
    create!: ProjectHistoryCreateWithoutUserInput;
}
