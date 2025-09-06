import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDirect_messagesInput } from './user-create-without-direct-messages.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDirect_messagesInput } from './user-create-or-connect-without-direct-messages.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDirect_messagesInput {

    @Field(() => UserCreateWithoutDirect_messagesInput, {nullable:true})
    @Type(() => UserCreateWithoutDirect_messagesInput)
    create?: UserCreateWithoutDirect_messagesInput;

    @Field(() => UserCreateOrConnectWithoutDirect_messagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDirect_messagesInput)
    connectOrCreate?: UserCreateOrConnectWithoutDirect_messagesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
