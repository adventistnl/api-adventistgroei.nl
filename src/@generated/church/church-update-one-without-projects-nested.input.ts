import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutProjectsInput } from './church-create-without-projects.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutProjectsInput } from './church-create-or-connect-without-projects.input';
import { ChurchUpsertWithoutProjectsInput } from './church-upsert-without-projects.input';
import { ChurchWhereInput } from './church-where.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateToOneWithWhereWithoutProjectsInput } from './church-update-to-one-with-where-without-projects.input';

@InputType()
export class ChurchUpdateOneWithoutProjectsNestedInput {

    @Field(() => ChurchCreateWithoutProjectsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutProjectsInput)
    create?: ChurchCreateWithoutProjectsInput;

    @Field(() => ChurchCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutProjectsInput;

    @Field(() => ChurchUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => ChurchUpsertWithoutProjectsInput)
    upsert?: ChurchUpsertWithoutProjectsInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    disconnect?: ChurchWhereInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    delete?: ChurchWhereInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchUpdateToOneWithWhereWithoutProjectsInput, {nullable:true})
    @Type(() => ChurchUpdateToOneWithWhereWithoutProjectsInput)
    update?: ChurchUpdateToOneWithWhereWithoutProjectsInput;
}
