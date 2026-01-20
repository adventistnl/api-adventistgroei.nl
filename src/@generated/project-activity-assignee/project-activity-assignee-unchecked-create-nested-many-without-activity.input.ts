import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityAssigneeCreateWithoutActivityInput } from './project-activity-assignee-create-without-activity.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeCreateOrConnectWithoutActivityInput } from './project-activity-assignee-create-or-connect-without-activity.input';
import { ProjectActivityAssigneeCreateManyActivityInputEnvelope } from './project-activity-assignee-create-many-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';

@InputType()
export class ProjectActivityAssigneeUncheckedCreateNestedManyWithoutActivityInput {

    @Field(() => [ProjectActivityAssigneeCreateWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateWithoutActivityInput)
    create?: Array<ProjectActivityAssigneeCreateWithoutActivityInput>;

    @Field(() => [ProjectActivityAssigneeCreateOrConnectWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateOrConnectWithoutActivityInput)
    connectOrCreate?: Array<ProjectActivityAssigneeCreateOrConnectWithoutActivityInput>;

    @Field(() => ProjectActivityAssigneeCreateManyActivityInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateManyActivityInputEnvelope)
    createMany?: ProjectActivityAssigneeCreateManyActivityInputEnvelope;

    @Field(() => [ProjectActivityAssigneeWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>>;
}
