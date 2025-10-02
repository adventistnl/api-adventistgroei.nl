import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutOwnerInput } from './project-activity-create-without-owner.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutOwnerInput } from './project-activity-create-or-connect-without-owner.input';
import { ProjectActivityCreateManyOwnerInputEnvelope } from './project-activity-create-many-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';

@InputType()
export class ProjectActivityCreateNestedManyWithoutOwnerInput {

    @Field(() => [ProjectActivityCreateWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectActivityCreateWithoutOwnerInput)
    create?: Array<ProjectActivityCreateWithoutOwnerInput>;

    @Field(() => [ProjectActivityCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<ProjectActivityCreateOrConnectWithoutOwnerInput>;

    @Field(() => ProjectActivityCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityCreateManyOwnerInputEnvelope)
    createMany?: ProjectActivityCreateManyOwnerInputEnvelope;

    @Field(() => [ProjectActivityWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>>;
}
