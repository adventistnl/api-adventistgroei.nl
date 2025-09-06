import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneEventRecipientArgs {

    @Field(() => EventRecipientWhereUniqueInput, {nullable:false})
    @Type(() => EventRecipientWhereUniqueInput)
    where!: Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>;
}
