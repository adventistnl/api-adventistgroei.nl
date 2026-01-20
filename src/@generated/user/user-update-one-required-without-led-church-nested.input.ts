import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLed_churchInput } from './user-create-without-led-church.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLed_churchInput } from './user-create-or-connect-without-led-church.input';
import { UserUpsertWithoutLed_churchInput } from './user-upsert-without-led-church.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLed_churchInput } from './user-update-to-one-with-where-without-led-church.input';

@InputType()
export class UserUpdateOneRequiredWithoutLed_churchNestedInput {

    @Field(() => UserCreateWithoutLed_churchInput, {nullable:true})
    @Type(() => UserCreateWithoutLed_churchInput)
    create?: UserCreateWithoutLed_churchInput;

    @Field(() => UserCreateOrConnectWithoutLed_churchInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLed_churchInput)
    connectOrCreate?: UserCreateOrConnectWithoutLed_churchInput;

    @Field(() => UserUpsertWithoutLed_churchInput, {nullable:true})
    @Type(() => UserUpsertWithoutLed_churchInput)
    upsert?: UserUpsertWithoutLed_churchInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutLed_churchInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutLed_churchInput)
    update?: UserUpdateToOneWithWhereWithoutLed_churchInput;
}
