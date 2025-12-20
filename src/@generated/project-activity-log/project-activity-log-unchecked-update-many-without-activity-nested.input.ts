import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityLogCreateWithoutActivityInput } from './project-activity-log-create-without-activity.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogCreateOrConnectWithoutActivityInput } from './project-activity-log-create-or-connect-without-activity.input';
import { ProjectActivityLogUpsertWithWhereUniqueWithoutActivityInput } from './project-activity-log-upsert-with-where-unique-without-activity.input';
import { ProjectActivityLogCreateManyActivityInputEnvelope } from './project-activity-log-create-many-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';
import { ProjectActivityLogUpdateWithWhereUniqueWithoutActivityInput } from './project-activity-log-update-with-where-unique-without-activity.input';
import { ProjectActivityLogUpdateManyWithWhereWithoutActivityInput } from './project-activity-log-update-many-with-where-without-activity.input';
import { ProjectActivityLogScalarWhereInput } from './project-activity-log-scalar-where.input';

@InputType()
export class ProjectActivityLogUncheckedUpdateManyWithoutActivityNestedInput {

    @Field(() => [ProjectActivityLogCreateWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityLogCreateWithoutActivityInput)
    create?: Array<ProjectActivityLogCreateWithoutActivityInput>;

    @Field(() => [ProjectActivityLogCreateOrConnectWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityLogCreateOrConnectWithoutActivityInput)
    connectOrCreate?: Array<ProjectActivityLogCreateOrConnectWithoutActivityInput>;

    @Field(() => [ProjectActivityLogUpsertWithWhereUniqueWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityLogUpsertWithWhereUniqueWithoutActivityInput)
    upsert?: Array<ProjectActivityLogUpsertWithWhereUniqueWithoutActivityInput>;

    @Field(() => ProjectActivityLogCreateManyActivityInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityLogCreateManyActivityInputEnvelope)
    createMany?: ProjectActivityLogCreateManyActivityInputEnvelope;

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

    @Field(() => [ProjectActivityLogUpdateWithWhereUniqueWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityLogUpdateWithWhereUniqueWithoutActivityInput)
    update?: Array<ProjectActivityLogUpdateWithWhereUniqueWithoutActivityInput>;

    @Field(() => [ProjectActivityLogUpdateManyWithWhereWithoutActivityInput], {nullable:true})
    @Type(() => ProjectActivityLogUpdateManyWithWhereWithoutActivityInput)
    updateMany?: Array<ProjectActivityLogUpdateManyWithWhereWithoutActivityInput>;

    @Field(() => [ProjectActivityLogScalarWhereInput], {nullable:true})
    @Type(() => ProjectActivityLogScalarWhereInput)
    deleteMany?: Array<ProjectActivityLogScalarWhereInput>;
}
