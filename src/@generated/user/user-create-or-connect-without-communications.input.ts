import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCommunicationsInput } from './user-create-without-communications.input';

@InputType()
export class UserCreateOrConnectWithoutCommunicationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutCommunicationsInput, {nullable:false})
    @Type(() => UserCreateWithoutCommunicationsInput)
    create!: UserCreateWithoutCommunicationsInput;
}
