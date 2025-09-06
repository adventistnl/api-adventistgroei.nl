import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDirect_messagesInput } from './user-create-without-direct-messages.input';

@InputType()
export class UserCreateOrConnectWithoutDirect_messagesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDirect_messagesInput, {nullable:false})
    @Type(() => UserCreateWithoutDirect_messagesInput)
    create!: UserCreateWithoutDirect_messagesInput;
}
