import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvailabilitiesInput } from './user-create-without-availabilities.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAvailabilitiesInput } from './user-create-or-connect-without-availabilities.input';
import { UserUpsertWithoutAvailabilitiesInput } from './user-upsert-without-availabilities.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAvailabilitiesInput } from './user-update-to-one-with-where-without-availabilities.input';

@InputType()
export class UserUpdateOneRequiredWithoutAvailabilitiesNestedInput {

    @Field(() => UserCreateWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => UserCreateWithoutAvailabilitiesInput)
    create?: UserCreateWithoutAvailabilitiesInput;

    @Field(() => UserCreateOrConnectWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAvailabilitiesInput)
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilitiesInput;

    @Field(() => UserUpsertWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => UserUpsertWithoutAvailabilitiesInput)
    upsert?: UserUpsertWithoutAvailabilitiesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAvailabilitiesInput)
    update?: UserUpdateToOneWithWhereWithoutAvailabilitiesInput;
}
