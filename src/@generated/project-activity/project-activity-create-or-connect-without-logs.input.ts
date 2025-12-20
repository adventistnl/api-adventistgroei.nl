import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutLogsInput } from './project-activity-create-without-logs.input';

@InputType()
export class ProjectActivityCreateOrConnectWithoutLogsInput {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityCreateWithoutLogsInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutLogsInput)
    create!: ProjectActivityCreateWithoutLogsInput;
}
