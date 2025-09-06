import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRecipientScalarWhereInput } from './event-recipient-scalar-where.input';
import { Type } from 'class-transformer';
import { EventRecipientUpdateManyMutationInput } from './event-recipient-update-many-mutation.input';

@InputType()
export class EventRecipientUpdateManyWithWhereWithoutUserInput {

    @Field(() => EventRecipientScalarWhereInput, {nullable:false})
    @Type(() => EventRecipientScalarWhereInput)
    where!: EventRecipientScalarWhereInput;

    @Field(() => EventRecipientUpdateManyMutationInput, {nullable:false})
    @Type(() => EventRecipientUpdateManyMutationInput)
    data!: EventRecipientUpdateManyMutationInput;
}
