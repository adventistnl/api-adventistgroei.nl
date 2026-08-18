import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchServiceCalendarCreateWithoutInstitutionInput } from './church-service-calendar-create-without-institution.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarCreateOrConnectWithoutInstitutionInput } from './church-service-calendar-create-or-connect-without-institution.input';
import { ChurchServiceCalendarUpsertWithWhereUniqueWithoutInstitutionInput } from './church-service-calendar-upsert-with-where-unique-without-institution.input';
import { ChurchServiceCalendarCreateManyInstitutionInputEnvelope } from './church-service-calendar-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchServiceCalendarWhereUniqueInput } from './church-service-calendar-where-unique.input';
import { ChurchServiceCalendarUpdateWithWhereUniqueWithoutInstitutionInput } from './church-service-calendar-update-with-where-unique-without-institution.input';
import { ChurchServiceCalendarUpdateManyWithWhereWithoutInstitutionInput } from './church-service-calendar-update-many-with-where-without-institution.input';
import { ChurchServiceCalendarScalarWhereInput } from './church-service-calendar-scalar-where.input';

@InputType()
export class ChurchServiceCalendarUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [ChurchServiceCalendarCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchServiceCalendarCreateWithoutInstitutionInput)
    create?: Array<ChurchServiceCalendarCreateWithoutInstitutionInput>;

    @Field(() => [ChurchServiceCalendarCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchServiceCalendarCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<ChurchServiceCalendarCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [ChurchServiceCalendarUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchServiceCalendarUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<ChurchServiceCalendarUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => ChurchServiceCalendarCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => ChurchServiceCalendarCreateManyInstitutionInputEnvelope)
    createMany?: ChurchServiceCalendarCreateManyInstitutionInputEnvelope;

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

    @Field(() => [ChurchServiceCalendarUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchServiceCalendarUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<ChurchServiceCalendarUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [ChurchServiceCalendarUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchServiceCalendarUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<ChurchServiceCalendarUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [ChurchServiceCalendarScalarWhereInput], {nullable:true})
    @Type(() => ChurchServiceCalendarScalarWhereInput)
    deleteMany?: Array<ChurchServiceCalendarScalarWhereInput>;
}
