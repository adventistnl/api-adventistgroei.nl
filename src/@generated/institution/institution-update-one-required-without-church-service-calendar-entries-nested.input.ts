import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutChurch_service_calendar_entriesInput } from './institution-create-without-church-service-calendar-entries.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutChurch_service_calendar_entriesInput } from './institution-create-or-connect-without-church-service-calendar-entries.input';
import { InstitutionUpsertWithoutChurch_service_calendar_entriesInput } from './institution-upsert-without-church-service-calendar-entries.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutChurch_service_calendar_entriesInput } from './institution-update-to-one-with-where-without-church-service-calendar-entries.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutChurch_service_calendar_entriesNestedInput {

    @Field(() => InstitutionCreateWithoutChurch_service_calendar_entriesInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutChurch_service_calendar_entriesInput)
    create?: InstitutionCreateWithoutChurch_service_calendar_entriesInput;

    @Field(() => InstitutionCreateOrConnectWithoutChurch_service_calendar_entriesInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutChurch_service_calendar_entriesInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutChurch_service_calendar_entriesInput;

    @Field(() => InstitutionUpsertWithoutChurch_service_calendar_entriesInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutChurch_service_calendar_entriesInput)
    upsert?: InstitutionUpsertWithoutChurch_service_calendar_entriesInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutChurch_service_calendar_entriesInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutChurch_service_calendar_entriesInput)
    update?: InstitutionUpdateToOneWithWhereWithoutChurch_service_calendar_entriesInput;
}
