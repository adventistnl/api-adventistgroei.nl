import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLed_departmentsInput } from './user-create-without-led-departments.input';

@InputType()
export class UserCreateOrConnectWithoutLed_departmentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutLed_departmentsInput, {nullable:false})
    @Type(() => UserCreateWithoutLed_departmentsInput)
    create!: UserCreateWithoutLed_departmentsInput;
}
