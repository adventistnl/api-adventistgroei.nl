import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { EventRecipientUpdateWithoutEventInput } from './event-recipient-update-without-event.input';

@InputType()
export class EventRecipientUpdateWithWhereUniqueWithoutEventInput {

    @Field(() => EventRecipientWhereUniqueInput, {nullable:false})
    @Type(() => EventRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>;

    @Field(() => EventRecipientUpdateWithoutEventInput, {nullable:false})
    @Type(() => EventRecipientUpdateWithoutEventInput)
    data!: EventRecipientUpdateWithoutEventInput;
}
