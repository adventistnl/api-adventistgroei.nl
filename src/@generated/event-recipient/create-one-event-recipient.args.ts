import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRecipientCreateInput } from './event-recipient-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventRecipientArgs {

    @Field(() => EventRecipientCreateInput, {nullable:false})
    @Type(() => EventRecipientCreateInput)
    data!: EventRecipientCreateInput;
}
