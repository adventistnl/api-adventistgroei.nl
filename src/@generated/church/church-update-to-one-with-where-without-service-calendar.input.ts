import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutService_calendarInput } from './church-update-without-service-calendar.input';

@InputType()
export class ChurchUpdateToOneWithWhereWithoutService_calendarInput {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => ChurchUpdateWithoutService_calendarInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutService_calendarInput)
    data!: ChurchUpdateWithoutService_calendarInput;
}
