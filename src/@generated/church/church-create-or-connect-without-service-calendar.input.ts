import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutService_calendarInput } from './church-create-without-service-calendar.input';

@InputType()
export class ChurchCreateOrConnectWithoutService_calendarInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchCreateWithoutService_calendarInput, {nullable:false})
    @Type(() => ChurchCreateWithoutService_calendarInput)
    create!: ChurchCreateWithoutService_calendarInput;
}
