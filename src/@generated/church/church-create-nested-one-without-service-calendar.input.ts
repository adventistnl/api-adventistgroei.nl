import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutService_calendarInput } from './church-create-without-service-calendar.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutService_calendarInput } from './church-create-or-connect-without-service-calendar.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedOneWithoutService_calendarInput {

    @Field(() => ChurchCreateWithoutService_calendarInput, {nullable:true})
    @Type(() => ChurchCreateWithoutService_calendarInput)
    create?: ChurchCreateWithoutService_calendarInput;

    @Field(() => ChurchCreateOrConnectWithoutService_calendarInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutService_calendarInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutService_calendarInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;
}
