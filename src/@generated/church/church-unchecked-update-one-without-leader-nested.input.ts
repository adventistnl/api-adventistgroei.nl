import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutLeaderInput } from './church-create-without-leader.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutLeaderInput } from './church-create-or-connect-without-leader.input';
import { ChurchUpsertWithoutLeaderInput } from './church-upsert-without-leader.input';
import { ChurchWhereInput } from './church-where.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateToOneWithWhereWithoutLeaderInput } from './church-update-to-one-with-where-without-leader.input';

@InputType()
export class ChurchUncheckedUpdateOneWithoutLeaderNestedInput {

    @Field(() => ChurchCreateWithoutLeaderInput, {nullable:true})
    @Type(() => ChurchCreateWithoutLeaderInput)
    create?: ChurchCreateWithoutLeaderInput;

    @Field(() => ChurchCreateOrConnectWithoutLeaderInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutLeaderInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutLeaderInput;

    @Field(() => ChurchUpsertWithoutLeaderInput, {nullable:true})
    @Type(() => ChurchUpsertWithoutLeaderInput)
    upsert?: ChurchUpsertWithoutLeaderInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    disconnect?: ChurchWhereInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    delete?: ChurchWhereInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchUpdateToOneWithWhereWithoutLeaderInput, {nullable:true})
    @Type(() => ChurchUpdateToOneWithWhereWithoutLeaderInput)
    update?: ChurchUpdateToOneWithWhereWithoutLeaderInput;
}
