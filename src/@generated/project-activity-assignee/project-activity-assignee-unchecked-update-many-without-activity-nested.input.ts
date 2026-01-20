import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityAssigneeCreateWithoutActivityInput } from './project-activity-assignee-create-without-activity.input';
import { Type } from 'class-transformer';
import { ProjectActivityAssigneeCreateOrConnectWithoutActivityInput } from './project-activity-assignee-create-or-connect-without-activity.input';
import { ProjectActivityAssigneeUpsertWithWhereUniqueWithoutActivityInput } from './project-activity-assignee-upsert-with-where-unique-without-activity.input';
import { ProjectActivityAssigneeCreateManyActivityInputEnvelope } from './project-activity-assignee-create-many-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityAssigneeWhereUniqueInput } from './project-activity-assignee-where-unique.input';
import { ProjectActivityAssigneeUpdateWithWhereUniqueWithoutActivityInput } from './project-activity-assignee-update-with-where-unique-without-activity.input';
import { ProjectActivityAssigneeUpdateManyWithWhereWithoutActivityInput } from './project-activity-assignee-update-many-with-where-without-activity.input';
import { ProjectActivityAssigneeScalarWhereInput } from './project-activity-assignee-scalar-where.input';

@InputType()
export class ProjectActivityAssigneeUncheckedUpdateManyWithoutActivityNestedInput {

    @Field(() => [ProjectActivityAssigneeCreateWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateWithoutActivityInput)
    create?: Array<ProjectActivityAssigneeCreateWithoutActivityInput>;

    @Field(() => [ProjectActivityAssigneeCreateOrConnectWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateOrConnectWithoutActivityInput)
    connectOrCreate?: Array<ProjectActivityAssigneeCreateOrConnectWithoutActivityInput>;

    @Field(() => [ProjectActivityAssigneeUpsertWithWhereUniqueWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeUpsertWithWhereUniqueWithoutActivityInput)
    upsert?: Array<ProjectActivityAssigneeUpsertWithWhereUniqueWithoutActivityInput>;

    @Field(() => ProjectActivityAssigneeCreateManyActivityInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityAssigneeCreateManyActivityInputEnvelope)
    createMany?: ProjectActivityAssigneeCreateManyActivityInputEnvelope;

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

    @Field(() => [ProjectActivityAssigneeUpdateWithWhereUniqueWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeUpdateWithWhereUniqueWithoutActivityInput)
    update?: Array<ProjectActivityAssigneeUpdateWithWhereUniqueWithoutActivityInput>;

    @Field(() => [ProjectActivityAssigneeUpdateManyWithWhereWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeUpdateManyWithWhereWithoutActivityInput)
    updateMany?: Array<ProjectActivityAssigneeUpdateManyWithWhereWithoutActivityInput>;

    @Field(() => [ProjectActivityAssigneeScalarWhereInput], {nullable:true})
    @Type(() => ProjectActivityAssigneeScalarWhereInput)
    deleteMany?: Array<ProjectActivityAssigneeScalarWhereInput>;
}
