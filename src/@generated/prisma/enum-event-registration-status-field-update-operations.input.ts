import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationStatus } from './event-registration-status.enum';

@InputType()
export class EnumEventRegistrationStatusFieldUpdateOperationsInput {

    @Field(() => EventRegistrationStatus, {nullable:true})
    set?: `${EventRegistrationStatus}`;
}
