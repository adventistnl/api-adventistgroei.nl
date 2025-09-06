import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEvent_registrationsInput } from './user-create-without-event-registrations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEvent_registrationsInput } from './user-create-or-connect-without-event-registrations.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEvent_registrationsInput {

    @Field(() => UserCreateWithoutEvent_registrationsInput, {nullable:true})
    @Type(() => UserCreateWithoutEvent_registrationsInput)
    create?: UserCreateWithoutEvent_registrationsInput;

    @Field(() => UserCreateOrConnectWithoutEvent_registrationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEvent_registrationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutEvent_registrationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
