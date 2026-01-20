import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogCreateWithoutActivityInput } from './project-activity-log-create-without-activity.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogCreateOrConnectWithoutActivityInput } from './project-activity-log-create-or-connect-without-activity.input';
import { ProjectActivityLogCreateManyActivityInputEnvelope } from './project-activity-log-create-many-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';

@InputType()
export class ProjectActivityLogUncheckedCreateNestedManyWithoutActivityInput {

    @Field(() => [ProjectActivityLogCreateWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityLogCreateWithoutActivityInput)
    create?: Array<ProjectActivityLogCreateWithoutActivityInput>;

    @Field(() => [ProjectActivityLogCreateOrConnectWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityLogCreateOrConnectWithoutActivityInput)
    connectOrCreate?: Array<ProjectActivityLogCreateOrConnectWithoutActivityInput>;

    @Field(() => ProjectActivityLogCreateManyActivityInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityLogCreateManyActivityInputEnvelope)
    createMany?: ProjectActivityLogCreateManyActivityInputEnvelope;

    @Field(() => [ProjectActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>>;
}
