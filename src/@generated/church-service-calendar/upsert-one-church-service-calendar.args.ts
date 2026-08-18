import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchServiceCalendarWhereUniqueInput } from './church-service-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarCreateInput } from './church-service-calendar-create.input';
import { ChurchServiceCalendarUpdateInput } from './church-service-calendar-update.input';

@ArgsType()
export class UpsertOneChurchServiceCalendarArgs {

    @Field(() => ChurchServiceCalendarWhereUniqueInput, {nullable:false})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => ChurchServiceCalendarCreateInput, {nullable:false})
    @Type(() => ChurchServiceCalendarCreateInput)
    create!: ChurchServiceCalendarCreateInput;

    @Field(() => ChurchServiceCalendarUpdateInput, {nullable:false})
    @Type(() => ChurchServiceCalendarUpdateInput)
    update!: ChurchServiceCalendarUpdateInput;
}
