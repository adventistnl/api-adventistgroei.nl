import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchServiceCalendarCreateInput } from './church-service-calendar-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneChurchServiceCalendarArgs {

    @Field(() => ChurchServiceCalendarCreateInput, {nullable:false})
    @Type(() => ChurchServiceCalendarCreateInput)
    data!: ChurchServiceCalendarCreateInput;
}
