import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchServiceCalendarWhereUniqueInput } from './church-service-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarCreateWithoutChurchInput } from './church-service-calendar-create-without-church.input';

@InputType()
export class ChurchServiceCalendarCreateOrConnectWithoutChurchInput {

    @Field(() => ChurchServiceCalendarWhereUniqueInput, {nullable:false})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => ChurchServiceCalendarCreateWithoutChurchInput, {nullable:false})
    @Type(() => ChurchServiceCalendarCreateWithoutChurchInput)
    create!: ChurchServiceCalendarCreateWithoutChurchInput;
}
