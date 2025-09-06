import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationCreateManyUserInput } from './event-registration-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class EventRegistrationCreateManyUserInputEnvelope {

    @Field(() => [EventRegistrationCreateManyUserInput], {nullable:false})
    @Type(() => EventRegistrationCreateManyUserInput)
    data!: Array<EventRegistrationCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
