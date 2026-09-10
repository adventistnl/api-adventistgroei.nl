import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchServiceCalendarWhereInput } from './church-service-calendar-where.input';

@InputType()
export class ChurchServiceCalendarListRelationFilter {

    @Field(() => ChurchServiceCalendarWhereInput, {nullable:true})
    every?: ChurchServiceCalendarWhereInput;

    @Field(() => ChurchServiceCalendarWhereInput, {nullable:true})
    some?: ChurchServiceCalendarWhereInput;

    @Field(() => ChurchServiceCalendarWhereInput, {nullable:true})
    none?: ChurchServiceCalendarWhereInput;
}
