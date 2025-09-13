import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutEventInput } from './project-create-without-event.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutEventInput } from './project-create-or-connect-without-event.input';
import { ProjectCreateManyEventInputEnvelope } from './project-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutEventInput {

    @Field(() => [ProjectCreateWithoutEventInput], {nullable:true})
    @Type(() => ProjectCreateWithoutEventInput)
    create?: Array<ProjectCreateWithoutEventInput>;

    @Field(() => [ProjectCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutEventInput>;

    @Field(() => ProjectCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyEventInputEnvelope)
    createMany?: ProjectCreateManyEventInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
}
