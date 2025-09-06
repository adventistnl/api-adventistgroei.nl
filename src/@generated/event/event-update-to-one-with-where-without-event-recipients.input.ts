import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutEvent_recipientsInput } from './event-update-without-event-recipients.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutEvent_recipientsInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutEvent_recipientsInput, {nullable:false})
    @Type(() => EventUpdateWithoutEvent_recipientsInput)
    data!: EventUpdateWithoutEvent_recipientsInput;
}
