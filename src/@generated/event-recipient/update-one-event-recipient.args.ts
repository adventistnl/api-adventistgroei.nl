import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRecipientUpdateInput } from './event-recipient-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';

@ArgsType()
export class UpdateOneEventRecipientArgs {

    @Field(() => EventRecipientUpdateInput, {nullable:false})
    @Type(() => EventRecipientUpdateInput)
    data!: EventRecipientUpdateInput;

    @Field(() => EventRecipientWhereUniqueInput, {nullable:false})
    @Type(() => EventRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>;
}
