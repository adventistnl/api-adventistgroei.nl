import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCommunicationsInput } from './user-create-without-communications.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCommunicationsInput } from './user-create-or-connect-without-communications.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCommunicationsInput {

    @Field(() => UserCreateWithoutCommunicationsInput, {nullable:true})
    @Type(() => UserCreateWithoutCommunicationsInput)
    create?: UserCreateWithoutCommunicationsInput;

    @Field(() => UserCreateOrConnectWithoutCommunicationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommunicationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCommunicationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
