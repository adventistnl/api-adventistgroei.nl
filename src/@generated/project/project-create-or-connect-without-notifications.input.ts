import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutNotificationsInput } from './project-create-without-notifications.input';

@InputType()
export class ProjectCreateOrConnectWithoutNotificationsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutNotificationsInput)
    create!: ProjectCreateWithoutNotificationsInput;
}
