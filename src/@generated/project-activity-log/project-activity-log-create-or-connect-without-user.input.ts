import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogCreateWithoutUserInput } from './project-activity-log-create-without-user.input';

@InputType()
export class ProjectActivityLogCreateOrConnectWithoutUserInput {

    @Field(() => ProjectActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityLogCreateWithoutUserInput, {nullable:false})
    @Type(() => ProjectActivityLogCreateWithoutUserInput)
    create!: ProjectActivityLogCreateWithoutUserInput;
}
