import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogCreateWithoutUserInput } from './project-activity-log-create-without-user.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogCreateOrConnectWithoutUserInput } from './project-activity-log-create-or-connect-without-user.input';
import { ProjectActivityLogCreateManyUserInputEnvelope } from './project-activity-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';

@InputType()
export class ProjectActivityLogCreateNestedManyWithoutUserInput {

    @Field(() => [ProjectActivityLogCreateWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityLogCreateWithoutUserInput)
    create?: Array<ProjectActivityLogCreateWithoutUserInput>;

    @Field(() => [ProjectActivityLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProjectActivityLogCreateOrConnectWithoutUserInput>;

    @Field(() => ProjectActivityLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityLogCreateManyUserInputEnvelope)
    createMany?: ProjectActivityLogCreateManyUserInputEnvelope;

    @Field(() => [ProjectActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>>;
}
