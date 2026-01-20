import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLed_churchInput } from './user-create-without-led-church.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLed_churchInput } from './user-create-or-connect-without-led-church.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLed_churchInput {

    @Field(() => UserCreateWithoutLed_churchInput, {nullable:true})
    @Type(() => UserCreateWithoutLed_churchInput)
    create?: UserCreateWithoutLed_churchInput;

    @Field(() => UserCreateOrConnectWithoutLed_churchInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLed_churchInput)
    connectOrCreate?: UserCreateOrConnectWithoutLed_churchInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
