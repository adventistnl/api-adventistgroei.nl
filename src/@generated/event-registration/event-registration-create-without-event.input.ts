import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationStatus } from '../prisma/event-registration-status.enum';
import { UserCreateNestedOneWithoutEvent_registrationsInput } from '../user/user-create-nested-one-without-event-registrations.input';
import { Type } from 'class-transformer';

@InputType()
export class EventRegistrationCreateWithoutEventInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EventRegistrationStatus, {nullable:false})
    status!: `${EventRegistrationStatus}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => UserCreateNestedOneWithoutEvent_registrationsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutEvent_registrationsInput)
    user!: UserCreateNestedOneWithoutEvent_registrationsInput;
}
