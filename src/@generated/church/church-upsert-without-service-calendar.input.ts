import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchUpdateWithoutService_calendarInput } from './church-update-without-service-calendar.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutService_calendarInput } from './church-create-without-service-calendar.input';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchUpsertWithoutService_calendarInput {

    @Field(() => ChurchUpdateWithoutService_calendarInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutService_calendarInput)
    update!: ChurchUpdateWithoutService_calendarInput;

    @Field(() => ChurchCreateWithoutService_calendarInput, {nullable:false})
    @Type(() => ChurchCreateWithoutService_calendarInput)
    create!: ChurchCreateWithoutService_calendarInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;
}
