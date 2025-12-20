import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogUpdateWithoutActivityInput } from './project-activity-log-update-without-activity.input';

@InputType()
export class ProjectActivityLogUpdateWithWhereUniqueWithoutActivityInput {

    @Field(() => ProjectActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityLogUpdateWithoutActivityInput, {nullable:false})
    @Type(() => ProjectActivityLogUpdateWithoutActivityInput)
    data!: ProjectActivityLogUpdateWithoutActivityInput;
}
