import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchServiceCalendarWhereUniqueInput } from './church-service-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarUpdateWithoutChurchInput } from './church-service-calendar-update-without-church.input';

@InputType()
export class ChurchServiceCalendarUpdateWithWhereUniqueWithoutChurchInput {

    @Field(() => ChurchServiceCalendarWhereUniqueInput, {nullable:false})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => ChurchServiceCalendarUpdateWithoutChurchInput, {nullable:false})
    @Type(() => ChurchServiceCalendarUpdateWithoutChurchInput)
    data!: ChurchServiceCalendarUpdateWithoutChurchInput;
}
