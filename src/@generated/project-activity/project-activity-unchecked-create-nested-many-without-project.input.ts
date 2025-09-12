import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutProjectInput } from './project-activity-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutProjectInput } from './project-activity-create-or-connect-without-project.input';
import { ProjectActivityCreateManyProjectInputEnvelope } from './project-activity-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';

@InputType()
export class ProjectActivityUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [ProjectActivityCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectActivityCreateWithoutProjectInput)
    create?: Array<ProjectActivityCreateWithoutProjectInput>;

    @Field(() => [ProjectActivityCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectActivityCreateOrConnectWithoutProjectInput>;

    @Field(() => ProjectActivityCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityCreateManyProjectInputEnvelope)
    createMany?: ProjectActivityCreateManyProjectInputEnvelope;

    @Field(() => [ProjectActivityWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>>;
}
