import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAvailability_recurrence_rulesInput } from './institution-create-without-availability-recurrence-rules.input';

@InputType()
export class InstitutionCreateOrConnectWithoutAvailability_recurrence_rulesInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutAvailability_recurrence_rulesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAvailability_recurrence_rulesInput)
    create!: InstitutionCreateWithoutAvailability_recurrence_rulesInput;
}
