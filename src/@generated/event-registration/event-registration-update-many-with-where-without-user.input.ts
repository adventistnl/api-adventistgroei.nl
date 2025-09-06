import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationScalarWhereInput } from './event-registration-scalar-where.input';
import { Type } from 'class-transformer';
import { EventRegistrationUpdateManyMutationInput } from './event-registration-update-many-mutation.input';

@InputType()
export class EventRegistrationUpdateManyWithWhereWithoutUserInput {

    @Field(() => EventRegistrationScalarWhereInput, {nullable:false})
    @Type(() => EventRegistrationScalarWhereInput)
    where!: EventRegistrationScalarWhereInput;

    @Field(() => EventRegistrationUpdateManyMutationInput, {nullable:false})
    @Type(() => EventRegistrationUpdateManyMutationInput)
    data!: EventRegistrationUpdateManyMutationInput;
}
