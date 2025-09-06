import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEvent_registrationsInput } from './user-create-without-event-registrations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEvent_registrationsInput } from './user-create-or-connect-without-event-registrations.input';
import { UserUpsertWithoutEvent_registrationsInput } from './user-upsert-without-event-registrations.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutEvent_registrationsInput } from './user-update-to-one-with-where-without-event-registrations.input';

@InputType()
export class UserUpdateOneRequiredWithoutEvent_registrationsNestedInput {

    @Field(() => UserCreateWithoutEvent_registrationsInput, {nullable:true})
    @Type(() => UserCreateWithoutEvent_registrationsInput)
    create?: UserCreateWithoutEvent_registrationsInput;

    @Field(() => UserCreateOrConnectWithoutEvent_registrationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEvent_registrationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutEvent_registrationsInput;

    @Field(() => UserUpsertWithoutEvent_registrationsInput, {nullable:true})
    @Type(() => UserUpsertWithoutEvent_registrationsInput)
    upsert?: UserUpsertWithoutEvent_registrationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutEvent_registrationsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutEvent_registrationsInput)
    update?: UserUpdateToOneWithWhereWithoutEvent_registrationsInput;
}
