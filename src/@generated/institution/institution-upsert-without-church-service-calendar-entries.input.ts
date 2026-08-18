import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutChurch_service_calendar_entriesInput } from './institution-update-without-church-service-calendar-entries.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutChurch_service_calendar_entriesInput } from './institution-create-without-church-service-calendar-entries.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutChurch_service_calendar_entriesInput {

    @Field(() => InstitutionUpdateWithoutChurch_service_calendar_entriesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutChurch_service_calendar_entriesInput)
    update!: InstitutionUpdateWithoutChurch_service_calendar_entriesInput;

    @Field(() => InstitutionCreateWithoutChurch_service_calendar_entriesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutChurch_service_calendar_entriesInput)
    create!: InstitutionCreateWithoutChurch_service_calendar_entriesInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
