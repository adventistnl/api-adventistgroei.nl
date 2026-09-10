import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchServiceCalendarUpdateInput } from './church-service-calendar-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ChurchServiceCalendarWhereUniqueInput } from './church-service-calendar-where-unique.input';

@ArgsType()
export class UpdateOneChurchServiceCalendarArgs {

    @Field(() => ChurchServiceCalendarUpdateInput, {nullable:false})
    @Type(() => ChurchServiceCalendarUpdateInput)
    data!: ChurchServiceCalendarUpdateInput;

    @Field(() => ChurchServiceCalendarWhereUniqueInput, {nullable:false})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>;
}
