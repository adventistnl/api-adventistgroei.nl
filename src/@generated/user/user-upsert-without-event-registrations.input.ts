import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEvent_registrationsInput } from './user-update-without-event-registrations.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEvent_registrationsInput } from './user-create-without-event-registrations.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutEvent_registrationsInput {

    @Field(() => UserUpdateWithoutEvent_registrationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutEvent_registrationsInput)
    update!: UserUpdateWithoutEvent_registrationsInput;

    @Field(() => UserCreateWithoutEvent_registrationsInput, {nullable:false})
    @Type(() => UserCreateWithoutEvent_registrationsInput)
    create!: UserCreateWithoutEvent_registrationsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
