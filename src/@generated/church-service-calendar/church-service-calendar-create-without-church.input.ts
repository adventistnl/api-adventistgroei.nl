import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCalendarSource } from '../prisma/service-calendar-source.enum';
import { InstitutionCreateNestedOneWithoutChurch_service_calendar_entriesInput } from '../institution/institution-create-nested-one-without-church-service-calendar-entries.input';
import { Type } from 'class-transformer';

@InputType()
export class ChurchServiceCalendarCreateWithoutChurchInput {

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

    @Field(() => InstitutionCreateNestedOneWithoutChurch_service_calendar_entriesInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutChurch_service_calendar_entriesInput)
    institution!: InstitutionCreateNestedOneWithoutChurch_service_calendar_entriesInput;
}
