import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRegistrationCreateInput } from './event-registration-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventRegistrationArgs {

    @Field(() => EventRegistrationCreateInput, {nullable:false})
    @Type(() => EventRegistrationCreateInput)
    data!: EventRegistrationCreateInput;
}
