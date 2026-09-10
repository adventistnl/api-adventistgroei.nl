import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutChurch_service_calendar_entriesInput } from './institution-create-without-church-service-calendar-entries.input';

@InputType()
export class InstitutionCreateOrConnectWithoutChurch_service_calendar_entriesInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutChurch_service_calendar_entriesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutChurch_service_calendar_entriesInput)
    create!: InstitutionCreateWithoutChurch_service_calendar_entriesInput;
}
