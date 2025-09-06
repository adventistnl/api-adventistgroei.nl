import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutEvent_recipientsInput } from './event-update-without-event-recipients.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutEvent_recipientsInput } from './event-create-without-event-recipients.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutEvent_recipientsInput {

    @Field(() => EventUpdateWithoutEvent_recipientsInput, {nullable:false})
    @Type(() => EventUpdateWithoutEvent_recipientsInput)
    update!: EventUpdateWithoutEvent_recipientsInput;

    @Field(() => EventCreateWithoutEvent_recipientsInput, {nullable:false})
    @Type(() => EventCreateWithoutEvent_recipientsInput)
    create!: EventCreateWithoutEvent_recipientsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
