import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLed_churchInput } from './user-create-without-led-church.input';

@InputType()
export class UserCreateOrConnectWithoutLed_churchInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutLed_churchInput, {nullable:false})
    @Type(() => UserCreateWithoutLed_churchInput)
    create!: UserCreateWithoutLed_churchInput;
}
