import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCalendarSource } from '../prisma/service-calendar-source.enum';
import { ChurchCreateNestedOneWithoutService_calendarInput } from '../church/church-create-nested-one-without-service-calendar.input';
import { Type } from 'class-transformer';

@InputType()
export class ChurchServiceCalendarCreateWithoutInstitutionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Boolean, {nullable:false})
    has_service!: boolean;

    @Field(() => ServiceCalendarSource, {nullable:true})
    source?: `${ServiceCalendarSource}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => ChurchCreateNestedOneWithoutService_calendarInput, {nullable:false})
    @Type(() => ChurchCreateNestedOneWithoutService_calendarInput)
    church!: ChurchCreateNestedOneWithoutService_calendarInput;
}
