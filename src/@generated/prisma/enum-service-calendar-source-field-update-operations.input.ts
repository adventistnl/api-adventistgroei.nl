import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCalendarSource } from './service-calendar-source.enum';

@InputType()
export class EnumServiceCalendarSourceFieldUpdateOperationsInput {

    @Field(() => ServiceCalendarSource, {nullable:true})
    set?: `${ServiceCalendarSource}`;
}
