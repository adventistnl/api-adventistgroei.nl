import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRecipientCreateManyInput } from './event-recipient-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventRecipientArgs {

    @Field(() => [EventRecipientCreateManyInput], {nullable:false})
    @Type(() => EventRecipientCreateManyInput)
    data!: Array<EventRecipientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
