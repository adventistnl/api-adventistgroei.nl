import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchServiceCalendarCreateWithoutInstitutionInput } from './church-service-calendar-create-without-institution.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarCreateOrConnectWithoutInstitutionInput } from './church-service-calendar-create-or-connect-without-institution.input';
import { ChurchServiceCalendarCreateManyInstitutionInputEnvelope } from './church-service-calendar-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchServiceCalendarWhereUniqueInput } from './church-service-calendar-where-unique.input';

@InputType()
export class ChurchServiceCalendarCreateNestedManyWithoutInstitutionInput {

    @Field(() => [ChurchServiceCalendarCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchServiceCalendarCreateWithoutInstitutionInput)
    create?: Array<ChurchServiceCalendarCreateWithoutInstitutionInput>;

    @Field(() => [ChurchServiceCalendarCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => ChurchServiceCalendarCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<ChurchServiceCalendarCreateOrConnectWithoutInstitutionInput>;

    @Field(() => ChurchServiceCalendarCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => ChurchServiceCalendarCreateManyInstitutionInputEnvelope)
    createMany?: ChurchServiceCalendarCreateManyInstitutionInputEnvelope;

    @Field(() => [ChurchServiceCalendarWhereUniqueInput], {nullable:true})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>>;
}
