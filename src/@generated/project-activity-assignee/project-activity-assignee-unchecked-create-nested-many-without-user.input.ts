import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityAssigneeCreateWithoutUserInput } from './project-activity-assignee-create-without-user.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeCreateOrConnectWithoutUserInput } from './project-activity-assignee-create-or-connect-without-user.input';
import { ProjectActivityAssigneeCreateManyUserInputEnvelope } from './project-activity-assignee-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';

@InputType()
export class ProjectActivityAssigneeUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ProjectActivityAssigneeCreateWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateWithoutUserInput)
    create?: Array<ProjectActivityAssigneeCreateWithoutUserInput>;

    @Field(() => [ProjectActivityAssigneeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProjectActivityAssigneeCreateOrConnectWithoutUserInput>;

    @Field(() => ProjectActivityAssigneeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateManyUserInputEnvelope)
    createMany?: ProjectActivityAssigneeCreateManyUserInputEnvelope;

    @Field(() => [ProjectActivityAssigneeWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>>;
}
