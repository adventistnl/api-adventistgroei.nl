import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    max_participants?: true;

    @Field(() => Boolean, {nullable:true})
    ticket_amount?: true;
}
