import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLed_departmentsInput } from './user-create-without-led-departments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLed_departmentsInput } from './user-create-or-connect-without-led-departments.input';
import { UserUpsertWithoutLed_departmentsInput } from './user-upsert-without-led-departments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLed_departmentsInput } from './user-update-to-one-with-where-without-led-departments.input';

@InputType()
export class UserUpdateOneRequiredWithoutLed_departmentsNestedInput {

    @Field(() => UserCreateWithoutLed_departmentsInput, {nullable:true})
    @Type(() => UserCreateWithoutLed_departmentsInput)
    create?: UserCreateWithoutLed_departmentsInput;

    @Field(() => UserCreateOrConnectWithoutLed_departmentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLed_departmentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLed_departmentsInput;

    @Field(() => UserUpsertWithoutLed_departmentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutLed_departmentsInput)
    upsert?: UserUpsertWithoutLed_departmentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutLed_departmentsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutLed_departmentsInput)
    update?: UserUpdateToOneWithWhereWithoutLed_departmentsInput;
}
