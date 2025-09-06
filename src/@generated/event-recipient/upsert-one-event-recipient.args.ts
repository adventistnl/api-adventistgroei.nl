import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';
import { Type } from 'class-transformer';
import { EventRecipientCreateInput } from './event-recipient-create.input';
import { EventRecipientUpdateInput } from './event-recipient-update.input';

@ArgsType()
export class UpsertOneEventRecipientArgs {

    @Field(() => EventRecipientWhereUniqueInput, {nullable:false})
    @Type(() => EventRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>;

    @Field(() => EventRecipientCreateInput, {nullable:false})
    @Type(() => EventRecipientCreateInput)
    create!: EventRecipientCreateInput;

    @Field(() => EventRecipientUpdateInput, {nullable:false})
    @Type(() => EventRecipientUpdateInput)
    update!: EventRecipientUpdateInput;
}
