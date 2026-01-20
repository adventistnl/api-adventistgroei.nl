import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutUsersInput } from './church-create-without-users.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutUsersInput } from './church-create-or-connect-without-users.input';
import { ChurchUpsertWithoutUsersInput } from './church-upsert-without-users.input';
import { ChurchWhereInput } from './church-where.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateToOneWithWhereWithoutUsersInput } from './church-update-to-one-with-where-without-users.input';

@InputType()
export class ChurchUpdateOneWithoutUsersNestedInput {

    @Field(() => ChurchCreateWithoutUsersInput, {nullable:true})
    @Type(() => ChurchCreateWithoutUsersInput)
    create?: ChurchCreateWithoutUsersInput;

    @Field(() => ChurchCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutUsersInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutUsersInput;

    @Field(() => ChurchUpsertWithoutUsersInput, {nullable:true})
    @Type(() => ChurchUpsertWithoutUsersInput)
    upsert?: ChurchUpsertWithoutUsersInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    disconnect?: ChurchWhereInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    delete?: ChurchWhereInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => ChurchUpdateToOneWithWhereWithoutUsersInput)
    update?: ChurchUpdateToOneWithWhereWithoutUsersInput;
}
