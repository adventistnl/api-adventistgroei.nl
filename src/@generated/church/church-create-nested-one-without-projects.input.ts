import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutProjectsInput } from './church-create-without-projects.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutProjectsInput } from './church-create-or-connect-without-projects.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedOneWithoutProjectsInput {

    @Field(() => ChurchCreateWithoutProjectsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutProjectsInput)
    create?: ChurchCreateWithoutProjectsInput;

    @Field(() => ChurchCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutProjectsInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;
}
