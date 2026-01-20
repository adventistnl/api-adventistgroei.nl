import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogCreateWithoutActivityInput } from './project-activity-log-create-without-activity.input';

@InputType()
export class ProjectActivityLogCreateOrConnectWithoutActivityInput {

    @Field(() => ProjectActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityLogCreateWithoutActivityInput, {nullable:false})
    @Type(() => ProjectActivityLogCreateWithoutActivityInput)
    create!: ProjectActivityLogCreateWithoutActivityInput;
}
