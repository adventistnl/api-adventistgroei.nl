import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityAssigneeCreateWithoutUserInput } from './project-activity-assignee-create-without-user.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeCreateOrConnectWithoutUserInput } from './project-activity-assignee-create-or-connect-without-user.input';
import { ProjectActivityAssigneeUpsertWithWhereUniqueWithoutUserInput } from './project-activity-assignee-upsert-with-where-unique-without-user.input';
import { ProjectActivityAssigneeCreateManyUserInputEnvelope } from './project-activity-assignee-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';
import { ProjectActivityAssigneeUpdateWithWhereUniqueWithoutUserInput } from './project-activity-assignee-update-with-where-unique-without-user.input';
import { ProjectActivityAssigneeUpdateManyWithWhereWithoutUserInput } from './project-activity-assignee-update-many-with-where-without-user.input';
import { ProjectActivityAssigneeScalarWhereInput } from './project-activity-assignee-scalar-where.input';

@InputType()
export class ProjectActivityAssigneeUpdateManyWithoutUserNestedInput {

    @Field(() => [ProjectActivityAssigneeCreateWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateWithoutUserInput)
    create?: Array<ProjectActivityAssigneeCreateWithoutUserInput>;

    @Field(() => [ProjectActivityAssigneeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProjectActivityAssigneeCreateOrConnectWithoutUserInput>;

    @Field(() => [ProjectActivityAssigneeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ProjectActivityAssigneeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ProjectActivityAssigneeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateManyUserInputEnvelope)
    createMany?: ProjectActivityAssigneeCreateManyUserInputEnvelope;

    @Field(() => [ProjectActivityAssigneeWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>>;

    @Field(() => [ProjectActivityAssigneeWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>>;

    @Field(() => [ProjectActivityAssigneeWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>>;

    @Field(() => [ProjectActivityAssigneeWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectActivityAssigneeWhereUniqueInput, 'id' | 'activity_id_user_id'>>;

    @Field(() => [ProjectActivityAssigneeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ProjectActivityAssigneeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ProjectActivityAssigneeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ProjectActivityAssigneeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ProjectActivityAssigneeScalarWhereInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeScalarWhereInput)
    deleteMany?: Array<ProjectActivityAssigneeScalarWhereInput>;
}
