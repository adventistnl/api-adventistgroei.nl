import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutChurch_service_calendar_entriesInput } from './institution-update-without-church-service-calendar-entries.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutChurch_service_calendar_entriesInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutChurch_service_calendar_entriesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutChurch_service_calendar_entriesInput)
    data!: InstitutionUpdateWithoutChurch_service_calendar_entriesInput;
}
