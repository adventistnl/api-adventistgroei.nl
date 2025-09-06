import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTargetType } from './event-target-type.enum';

@InputType()
export class EnumEventTargetTypeFieldUpdateOperationsInput {

    @Field(() => EventTargetType, {nullable:true})
    set?: `${EventTargetType}`;
}
