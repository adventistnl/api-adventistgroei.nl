import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchServiceCalendarCreateWithoutChurchInput } from './church-service-calendar-create-without-church.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarCreateOrConnectWithoutChurchInput } from './church-service-calendar-create-or-connect-without-church.input';
import { ChurchServiceCalendarCreateManyChurchInputEnvelope } from './church-service-calendar-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchServiceCalendarWhereUniqueInput } from './church-service-calendar-where-unique.input';

@InputType()
export class ChurchServiceCalendarCreateNestedManyWithoutChurchInput {

    @Field(() => [ChurchServiceCalendarCreateWithoutChurchInput], {nullable:true})
    @Type(() => ChurchServiceCalendarCreateWithoutChurchInput)
    create?: Array<ChurchServiceCalendarCreateWithoutChurchInput>;

    @Field(() => [ChurchServiceCalendarCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => ChurchServiceCalendarCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<ChurchServiceCalendarCreateOrConnectWithoutChurchInput>;

    @Field(() => ChurchServiceCalendarCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => ChurchServiceCalendarCreateManyChurchInputEnvelope)
    createMany?: ChurchServiceCalendarCreateManyChurchInputEnvelope;

    @Field(() => [ChurchServiceCalendarWhereUniqueInput], {nullable:true})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>>;
}
