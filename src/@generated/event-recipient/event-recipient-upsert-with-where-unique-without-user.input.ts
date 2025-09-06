import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { EventRecipientUpdateWithoutUserInput } from './event-recipient-update-without-user.input';
import { EventRecipientCreateWithoutUserInput } from './event-recipient-create-without-user.input';

@InputType()
export class EventRecipientUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => EventRecipientWhereUniqueInput, {nullable:false})
    @Type(() => EventRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>;

    @Field(() => EventRecipientUpdateWithoutUserInput, {nullable:false})
    @Type(() => EventRecipientUpdateWithoutUserInput)
    update!: EventRecipientUpdateWithoutUserInput;

    @Field(() => EventRecipientCreateWithoutUserInput, {nullable:false})
    @Type(() => EventRecipientCreateWithoutUserInput)
    create!: EventRecipientCreateWithoutUserInput;
}
