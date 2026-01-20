import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLed_departmentsInput } from './user-create-without-led-departments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLed_departmentsInput } from './user-create-or-connect-without-led-departments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLed_departmentsInput {

    @Field(() => UserCreateWithoutLed_departmentsInput, {nullable:true})
    @Type(() => UserCreateWithoutLed_departmentsInput)
    create?: UserCreateWithoutLed_departmentsInput;

    @Field(() => UserCreateOrConnectWithoutLed_departmentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLed_departmentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLed_departmentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
