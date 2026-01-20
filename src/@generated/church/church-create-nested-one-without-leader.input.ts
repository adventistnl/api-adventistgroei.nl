import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutLeaderInput } from './church-create-without-leader.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutLeaderInput } from './church-create-or-connect-without-leader.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedOneWithoutLeaderInput {

    @Field(() => ChurchCreateWithoutLeaderInput, {nullable:true})
    @Type(() => ChurchCreateWithoutLeaderInput)
    create?: ChurchCreateWithoutLeaderInput;

    @Field(() => ChurchCreateOrConnectWithoutLeaderInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutLeaderInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutLeaderInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;
}
