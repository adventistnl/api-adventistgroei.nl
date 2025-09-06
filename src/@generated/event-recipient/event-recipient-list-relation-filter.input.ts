import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRecipientWhereInput } from './event-recipient-where.input';

@InputType()
export class EventRecipientListRelationFilter {

    @Field(() => EventRecipientWhereInput, {nullable:true})
    every?: EventRecipientWhereInput;

    @Field(() => EventRecipientWhereInput, {nullable:true})
    some?: EventRecipientWhereInput;

    @Field(() => EventRecipientWhereInput, {nullable:true})
    none?: EventRecipientWhereInput;
}
