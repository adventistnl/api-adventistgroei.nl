import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDirect_message_recipientsInput } from './user-create-without-direct-message-recipients.input';

@InputType()
export class UserCreateOrConnectWithoutDirect_message_recipientsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => UserCreateWithoutDirect_message_recipientsInput)
    create!: UserCreateWithoutDirect_message_recipientsInput;
}
