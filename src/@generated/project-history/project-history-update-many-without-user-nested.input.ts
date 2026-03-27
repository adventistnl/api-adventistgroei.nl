import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryCreateWithoutUserInput } from './project-history-create-without-user.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateOrConnectWithoutUserInput } from './project-history-create-or-connect-without-user.input';
import { ProjectHistoryUpsertWithWhereUniqueWithoutUserInput } from './project-history-upsert-with-where-unique-without-user.input';
import { ProjectHistoryCreateManyUserInputEnvelope } from './project-history-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';
import { ProjectHistoryUpdateWithWhereUniqueWithoutUserInput } from './project-history-update-with-where-unique-without-user.input';
import { ProjectHistoryUpdateManyWithWhereWithoutUserInput } from './project-history-update-many-with-where-without-user.input';
import { ProjectHistoryScalarWhereInput } from './project-history-scalar-where.input';

@InputType()
export class ProjectHistoryUpdateManyWithoutUserNestedInput {

    @Field(() => [ProjectHistoryCreateWithoutUserInput], {nullable:true})
    @Type(() => ProjectHistoryCreateWithoutUserInput)
    create?: Array<ProjectHistoryCreateWithoutUserInput>;

    @Field(() => [ProjectHistoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProjectHistoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProjectHistoryCreateOrConnectWithoutUserInput>;

    @Field(() => [ProjectHistoryUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProjectHistoryUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ProjectHistoryUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ProjectHistoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProjectHistoryCreateManyUserInputEnvelope)
    createMany?: ProjectHistoryCreateManyUserInputEnvelope;

    @Field(() => [ProjectHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ProjectHistoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ProjectHistoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ProjectHistoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ProjectHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectHistoryUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProjectHistoryUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ProjectHistoryUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ProjectHistoryUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ProjectHistoryUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ProjectHistoryUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ProjectHistoryScalarWhereInput], {nullable:true})
    @Type(() => ProjectHistoryScalarWhereInput)
    deleteMany?: Array<ProjectHistoryScalarWhereInput>;
}
