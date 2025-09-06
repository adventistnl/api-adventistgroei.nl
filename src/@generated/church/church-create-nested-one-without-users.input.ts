import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutUsersInput } from './church-create-without-users.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutUsersInput } from './church-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedOneWithoutUsersInput {

    @Field(() => ChurchCreateWithoutUsersInput, {nullable:true})
    @Type(() => ChurchCreateWithoutUsersInput)
    create?: ChurchCreateWithoutUsersInput;

    @Field(() => ChurchCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutUsersInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutUsersInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;
}
