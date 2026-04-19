import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryCreateWithoutProjectInput } from './project-history-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateOrConnectWithoutProjectInput } from './project-history-create-or-connect-without-project.input';
import { ProjectHistoryCreateManyProjectInputEnvelope } from './project-history-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';

@InputType()
export class ProjectHistoryUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [ProjectHistoryCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectHistoryCreateWithoutProjectInput)
    create?: Array<ProjectHistoryCreateWithoutProjectInput>;

    @Field(() => [ProjectHistoryCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectHistoryCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectHistoryCreateOrConnectWithoutProjectInput>;

    @Field(() => ProjectHistoryCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectHistoryCreateManyProjectInputEnvelope)
    createMany?: ProjectHistoryCreateManyProjectInputEnvelope;

    @Field(() => [ProjectHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ProjectHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>>;
}
