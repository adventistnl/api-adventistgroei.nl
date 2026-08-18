import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityUpdateWithoutInstitutionInput } from './availability-update-without-institution.input';
import { AvailabilityCreateWithoutInstitutionInput } from './availability-create-without-institution.input';

@InputType()
export class AvailabilityUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>;

    @Field(() => AvailabilityUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => AvailabilityUpdateWithoutInstitutionInput)
    update!: AvailabilityUpdateWithoutInstitutionInput;

    @Field(() => AvailabilityCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => AvailabilityCreateWithoutInstitutionInput)
    create!: AvailabilityCreateWithoutInstitutionInput;
}
