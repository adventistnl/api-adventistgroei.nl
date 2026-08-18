import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvailabilitiesInput } from './user-create-without-availabilities.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAvailabilitiesInput } from './user-create-or-connect-without-availabilities.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAvailabilitiesInput {

    @Field(() => UserCreateWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => UserCreateWithoutAvailabilitiesInput)
    create?: UserCreateWithoutAvailabilitiesInput;

    @Field(() => UserCreateOrConnectWithoutAvailabilitiesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAvailabilitiesInput)
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilitiesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
