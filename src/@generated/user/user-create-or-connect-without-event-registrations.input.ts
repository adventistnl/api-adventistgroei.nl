import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEvent_registrationsInput } from './user-create-without-event-registrations.input';

@InputType()
export class UserCreateOrConnectWithoutEvent_registrationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutEvent_registrationsInput, {nullable:false})
    @Type(() => UserCreateWithoutEvent_registrationsInput)
    create!: UserCreateWithoutEvent_registrationsInput;
}
