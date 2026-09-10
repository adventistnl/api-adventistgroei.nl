import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAvailabilitiesInput } from './user-create-without-availabilities.input';

@InputType()
export class UserCreateOrConnectWithoutAvailabilitiesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutAvailabilitiesInput, {nullable:false})
    @Type(() => UserCreateWithoutAvailabilitiesInput)
    create!: UserCreateWithoutAvailabilitiesInput;
}
