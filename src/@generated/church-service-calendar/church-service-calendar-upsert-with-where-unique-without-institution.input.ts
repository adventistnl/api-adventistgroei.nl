import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchServiceCalendarWhereUniqueInput } from './church-service-calendar-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarUpdateWithoutInstitutionInput } from './church-service-calendar-update-without-institution.input';
import { ChurchServiceCalendarCreateWithoutInstitutionInput } from './church-service-calendar-create-without-institution.input';

@InputType()
export class ChurchServiceCalendarUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => ChurchServiceCalendarWhereUniqueInput, {nullable:false})
    @Type(() => ChurchServiceCalendarWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => ChurchServiceCalendarUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => ChurchServiceCalendarUpdateWithoutInstitutionInput)
    update!: ChurchServiceCalendarUpdateWithoutInstitutionInput;

    @Field(() => ChurchServiceCalendarCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => ChurchServiceCalendarCreateWithoutInstitutionInput)
    create!: ChurchServiceCalendarCreateWithoutInstitutionInput;
}
