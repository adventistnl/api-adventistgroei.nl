import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutChurchInput } from './project-create-without-church.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutChurchInput } from './project-create-or-connect-without-church.input';
import { ProjectCreateManyChurchInputEnvelope } from './project-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutChurchInput {

    @Field(() => [ProjectCreateWithoutChurchInput], {nullable:true})
    @Type(() => ProjectCreateWithoutChurchInput)
    create?: Array<ProjectCreateWithoutChurchInput>;

    @Field(() => [ProjectCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutChurchInput>;

    @Field(() => ProjectCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyChurchInputEnvelope)
    createMany?: ProjectCreateManyChurchInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
}
