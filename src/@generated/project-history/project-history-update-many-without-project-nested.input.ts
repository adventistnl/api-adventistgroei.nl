import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryCreateWithoutProjectInput } from './project-history-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateOrConnectWithoutProjectInput } from './project-history-create-or-connect-without-project.input';
import { ProjectHistoryUpsertWithWhereUniqueWithoutProjectInput } from './project-history-upsert-with-where-unique-without-project.input';
import { ProjectHistoryCreateManyProjectInputEnvelope } from './project-history-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';
import { ProjectHistoryUpdateWithWhereUniqueWithoutProjectInput } from './project-history-update-with-where-unique-without-project.input';
import { ProjectHistoryUpdateManyWithWhereWithoutProjectInput } from './project-history-update-many-with-where-without-project.input';
import { ProjectHistoryScalarWhereInput } from './project-history-scalar-where.input';

@InputType()
export class ProjectHistoryUpdateManyWithoutProjectNestedInput {

    @Field(() => [ProjectHistoryCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectHistoryCreateWithoutProjectInput)
    create?: Array<ProjectHistoryCreateWithoutProjectInput>;

    @Field(() => [ProjectHistoryCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectHistoryCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectHistoryCreateOrConnectWithoutProjectInput>;

    @Field(() => [ProjectHistoryUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectHistoryUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ProjectHistoryUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ProjectHistoryCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectHistoryCreateManyProjectInputEnvelope)
    createMany?: ProjectHistoryCreateManyProjectInputEnvelope;

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

    @Field(() => [ProjectHistoryUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectHistoryUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ProjectHistoryUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ProjectHistoryUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ProjectHistoryUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ProjectHistoryUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ProjectHistoryScalarWhereInput], {nullable:true})
    @Type(() => ProjectHistoryScalarWhereInput)
    deleteMany?: Array<ProjectHistoryScalarWhereInput>;
}
