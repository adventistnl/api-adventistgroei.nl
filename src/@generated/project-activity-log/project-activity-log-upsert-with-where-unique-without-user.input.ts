import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogUpdateWithoutUserInput } from './project-activity-log-update-without-user.input';
import { ProjectActivityLogCreateWithoutUserInput } from './project-activity-log-create-without-user.input';

@InputType()
export class ProjectActivityLogUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ProjectActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityLogUpdateWithoutUserInput, {nullable:false})
    @Type(() => ProjectActivityLogUpdateWithoutUserInput)
    update!: ProjectActivityLogUpdateWithoutUserInput;

    @Field(() => ProjectActivityLogCreateWithoutUserInput, {nullable:false})
    @Type(() => ProjectActivityLogCreateWithoutUserInput)
    create!: ProjectActivityLogCreateWithoutUserInput;
}
