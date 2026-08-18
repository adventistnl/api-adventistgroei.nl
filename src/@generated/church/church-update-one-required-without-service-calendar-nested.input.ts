import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutService_calendarInput } from './church-create-without-service-calendar.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutService_calendarInput } from './church-create-or-connect-without-service-calendar.input';
import { ChurchUpsertWithoutService_calendarInput } from './church-upsert-without-service-calendar.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateToOneWithWhereWithoutService_calendarInput } from './church-update-to-one-with-where-without-service-calendar.input';

@InputType()
export class ChurchUpdateOneRequiredWithoutService_calendarNestedInput {

    @Field(() => ChurchCreateWithoutService_calendarInput, {nullable:true})
    @Type(() => ChurchCreateWithoutService_calendarInput)
    create?: ChurchCreateWithoutService_calendarInput;

    @Field(() => ChurchCreateOrConnectWithoutService_calendarInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutService_calendarInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutService_calendarInput;

    @Field(() => ChurchUpsertWithoutService_calendarInput, {nullable:true})
    @Type(() => ChurchUpsertWithoutService_calendarInput)
    upsert?: ChurchUpsertWithoutService_calendarInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchUpdateToOneWithWhereWithoutService_calendarInput, {nullable:true})
    @Type(() => ChurchUpdateToOneWithWhereWithoutService_calendarInput)
    update?: ChurchUpdateToOneWithWhereWithoutService_calendarInput;
}
