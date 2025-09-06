import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventType } from './event-type.enum';

@InputType()
export class EnumEventTypeFieldUpdateOperationsInput {

    @Field(() => EventType, {nullable:true})
    set?: `${EventType}`;
}
