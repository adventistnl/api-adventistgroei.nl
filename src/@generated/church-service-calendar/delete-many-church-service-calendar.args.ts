import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchServiceCalendarWhereInput } from './church-service-calendar-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyChurchServiceCalendarArgs {

    @Field(() => ChurchServiceCalendarWhereInput, {nullable:true})
    @Type(() => ChurchServiceCalendarWhereInput)
    where?: ChurchServiceCalendarWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
