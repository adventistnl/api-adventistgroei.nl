import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutAvailability_recurrence_rulesInput } from './institution-update-without-availability-recurrence-rules.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutAvailability_recurrence_rulesInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutAvailability_recurrence_rulesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAvailability_recurrence_rulesInput)
    data!: InstitutionUpdateWithoutAvailability_recurrence_rulesInput;
}
