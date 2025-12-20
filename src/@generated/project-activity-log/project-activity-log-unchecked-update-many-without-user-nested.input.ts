import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogCreateWithoutUserInput } from './project-activity-log-create-without-user.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogCreateOrConnectWithoutUserInput } from './project-activity-log-create-or-connect-without-user.input';
import { ProjectActivityLogUpsertWithWhereUniqueWithoutUserInput } from './project-activity-log-upsert-with-where-unique-without-user.input';
import { ProjectActivityLogCreateManyUserInputEnvelope } from './project-activity-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';
import { ProjectActivityLogUpdateWithWhereUniqueWithoutUserInput } from './project-activity-log-update-with-where-unique-without-user.input';
import { ProjectActivityLogUpdateManyWithWhereWithoutUserInput } from './project-activity-log-update-many-with-where-without-user.input';
import { ProjectActivityLogScalarWhereInput } from './project-activity-log-scalar-where.input';

@InputType()
export class ProjectActivityLogUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ProjectActivityLogCreateWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityLogCreateWithoutUserInput)
    create?: Array<ProjectActivityLogCreateWithoutUserInput>;

    @Field(() => [ProjectActivityLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProjectActivityLogCreateOrConnectWithoutUserInput>;

    @Field(() => [ProjectActivityLogUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityLogUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ProjectActivityLogUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ProjectActivityLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityLogCreateManyUserInputEnvelope)
    createMany?: ProjectActivityLogCreateManyUserInputEnvelope;

    @Field(() => [ProjectActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectActivityLogUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityLogUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ProjectActivityLogUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ProjectActivityLogUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ProjectActivityLogUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ProjectActivityLogUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ProjectActivityLogScalarWhereInput], {nullable:true})
    @Type(() => ProjectActivityLogScalarWhereInput)
    deleteMany?: Array<ProjectActivityLogScalarWhereInput>;
}
