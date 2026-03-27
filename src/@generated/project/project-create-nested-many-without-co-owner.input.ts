import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutCo_ownerInput } from './project-create-without-co-owner.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutCo_ownerInput } from './project-create-or-connect-without-co-owner.input';
import { ProjectCreateManyCo_ownerInputEnvelope } from './project-create-many-co-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutCo_ownerInput {

    @Field(() => [ProjectCreateWithoutCo_ownerInput], {nullable:true})
    @Type(() => ProjectCreateWithoutCo_ownerInput)
    create?: Array<ProjectCreateWithoutCo_ownerInput>;

    @Field(() => [ProjectCreateOrConnectWithoutCo_ownerInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutCo_ownerInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutCo_ownerInput>;

    @Field(() => ProjectCreateManyCo_ownerInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyCo_ownerInputEnvelope)
    createMany?: ProjectCreateManyCo_ownerInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
}
