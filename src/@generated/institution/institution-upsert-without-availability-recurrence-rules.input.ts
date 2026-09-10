import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutAvailability_recurrence_rulesInput } from './institution-update-without-availability-recurrence-rules.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAvailability_recurrence_rulesInput } from './institution-create-without-availability-recurrence-rules.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutAvailability_recurrence_rulesInput {

    @Field(() => InstitutionUpdateWithoutAvailability_recurrence_rulesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAvailability_recurrence_rulesInput)
    update!: InstitutionUpdateWithoutAvailability_recurrence_rulesInput;

    @Field(() => InstitutionCreateWithoutAvailability_recurrence_rulesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAvailability_recurrence_rulesInput)
    create!: InstitutionCreateWithoutAvailability_recurrence_rulesInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
