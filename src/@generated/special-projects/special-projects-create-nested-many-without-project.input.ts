import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpecialProjectsCreateWithoutProjectInput } from './special-projects-create-without-project.input';
import { Type } from 'class-transformer';
import { SpecialProjectsCreateOrConnectWithoutProjectInput } from './special-projects-create-or-connect-without-project.input';
import { SpecialProjectsCreateManyProjectInputEnvelope } from './special-projects-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';

@InputType()
export class SpecialProjectsCreateNestedManyWithoutProjectInput {

    @Field(() => [SpecialProjectsCreateWithoutProjectInput], {nullable:true})
    @Type(() => SpecialProjectsCreateWithoutProjectInput)
    create?: Array<SpecialProjectsCreateWithoutProjectInput>;

    @Field(() => [SpecialProjectsCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => SpecialProjectsCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<SpecialProjectsCreateOrConnectWithoutProjectInput>;

    @Field(() => SpecialProjectsCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => SpecialProjectsCreateManyProjectInputEnvelope)
    createMany?: SpecialProjectsCreateManyProjectInputEnvelope;

    @Field(() => [SpecialProjectsWhereUniqueInput], {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>>;
}
