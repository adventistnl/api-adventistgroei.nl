import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutEvent_registrationsInput } from './user-update-without-event-registrations.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutEvent_registrationsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutEvent_registrationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutEvent_registrationsInput)
    data!: UserUpdateWithoutEvent_registrationsInput;
}
