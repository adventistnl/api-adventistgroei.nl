import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyContactInput } from './event-create-many-contact.input';
import { Type } from 'class-transformer';

@InputType()
export class EventCreateManyContactInputEnvelope {

    @Field(() => [EventCreateManyContactInput], {nullable:false})
    @Type(() => EventCreateManyContactInput)
    data!: Array<EventCreateManyContactInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
