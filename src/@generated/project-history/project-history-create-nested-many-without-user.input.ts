import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryCreateWithoutUserInput } from './project-history-create-without-user.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateOrConnectWithoutUserInput } from './project-history-create-or-connect-without-user.input';
import { ProjectHistoryCreateManyUserInputEnvelope } from './project-history-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';

@InputType()
export class ProjectHistoryCreateNestedManyWithoutUserInput {

    @Field(() => [ProjectHistoryCreateWithoutUserInput], {nullable:true})
    @Type(() => ProjectHistoryCreateWithoutUserInput)
    create?: Array<ProjectHistoryCreateWithoutUserInput>;

    @Field(() => [ProjectHistoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProjectHistoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProjectHistoryCreateOrConnectWithoutUserInput>;

    @Field(() => ProjectHistoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProjectHistoryCreateManyUserInputEnvelope)
    createMany?: ProjectHistoryCreateManyUserInputEnvelope;

    @Field(() => [ProjectHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ProjectHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>>;
}
