import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurrenceType } from './recurrence-type.enum';

@InputType()
export class EnumRecurrenceTypeFieldUpdateOperationsInput {

    @Field(() => RecurrenceType, {nullable:true})
    set?: `${RecurrenceType}`;
}
