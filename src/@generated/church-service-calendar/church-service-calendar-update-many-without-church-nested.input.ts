import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchServiceCalendarCreateWithoutChurchInput } from './church-service-calendar-create-without-church.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarCreateOrConnectWithoutChurchInput } from './church-service-calendar-create-or-connect-without-church.input';
import { ChurchServiceCalendarUpsertWithWhereUniqueWithoutChurchInput } from './church-service-calendar-upsert-with-where-unique-without-church.input';
import { ChurchServiceCalendarCreateManyChurchInputEnvelope } from './church-service-calendar-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchServiceCalendarWhereUniqueInput } from './church-service-calendar-where-unique.input';
import { ChurchServiceCalendarUpdateWithWhereUniqueWithoutChurchInput } from './church-service-calendar-update-with-where-unique-without-church.input';
import { ChurchServiceCalendarUpdateManyWithWhereWithoutChurchInput } from './church-service-calendar-update-many-with-where-without-church.input';
import { ChurchServiceCalendarScalarWhereInput } from './church-service-calendar-scalar-where.input';

@InputType()
export class ChurchServiceCalendarUpdateManyWithoutChurchNestedInput {

    @Field(() => [ChurchServiceCalendarCreateWithoutChurchInput], {nullable:true})
    @Type(() => ChurchServiceCalendarCreateWithoutChurchInput)
    create?: Array<ChurchServiceCalendarCreateWithoutChurchInput>;

    @Field(() => [ChurchServiceCalendarCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => ChurchServiceCalendarCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<ChurchServiceCalendarCreateOrConnectWithoutChurchInput>;

    @Field(() => [ChurchServiceCalendarUpsertWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => ChurchServiceCalendarUpsertWithWhereUniqueWithoutChurchInput)
    upsert?: Array<ChurchServiceCalendarUpsertWithWhereUniqueWithoutChurchInput>;

    @Field(() => ChurchServiceCalendarCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => ChurchServiceCalendarCreateManyChurchInputEnvelope)
    createMany?: ChurchServiceCalendarCreateManyChurchInputEnvelope;

    @Field(() => [ChurchServiceCalendarWhereUniqueInput], {nullable:true})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [ChurchServiceCalendarWhereUniqueInput], {nullable:true})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [ChurchServiceCalendarWhereUniqueInput], {nullable:true})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [ChurchServiceCalendarWhereUniqueInput], {nullable:true})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [ChurchServiceCalendarUpdateWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => ChurchServiceCalendarUpdateWithWhereUniqueWithoutChurchInput)
    update?: Array<ChurchServiceCalendarUpdateWithWhereUniqueWithoutChurchInput>;

    @Field(() => [ChurchServiceCalendarUpdateManyWithWhereWithoutChurchInput], {nullable:true})
    @Type(() => ChurchServiceCalendarUpdateManyWithWhereWithoutChurchInput)
    updateMany?: Array<ChurchServiceCalendarUpdateManyWithWhereWithoutChurchInput>;

    @Field(() => [ChurchServiceCalendarScalarWhereInput], {nullable:true})
    @Type(() => ChurchServiceCalendarScalarWhereInput)
    deleteMany?: Array<ChurchServiceCalendarScalarWhereInput>;
}
