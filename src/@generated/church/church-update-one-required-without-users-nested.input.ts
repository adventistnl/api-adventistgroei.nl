import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutUsersInput } from './church-create-without-users.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutUsersInput } from './church-create-or-connect-without-users.input';
import { ChurchUpsertWithoutUsersInput } from './church-upsert-without-users.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateToOneWithWhereWithoutUsersInput } from './church-update-to-one-with-where-without-users.input';

@InputType()
export class ChurchUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => ChurchCreateWithoutUsersInput, {nullable:true})
    @Type(() => ChurchCreateWithoutUsersInput)
    create?: ChurchCreateWithoutUsersInput;

    @Field(() => ChurchCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutUsersInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutUsersInput;

    @Field(() => ChurchUpsertWithoutUsersInput, {nullable:true})
    @Type(() => ChurchUpsertWithoutUsersInput)
    upsert?: ChurchUpsertWithoutUsersInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => ChurchUpdateToOneWithWhereWithoutUsersInput)
    update?: ChurchUpdateToOneWithWhereWithoutUsersInput;
}
