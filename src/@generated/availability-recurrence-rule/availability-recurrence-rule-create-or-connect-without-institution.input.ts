import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateWithoutInstitutionInput } from './availability-recurrence-rule-create-without-institution.input';

@InputType()
export class AvailabilityRecurrenceRuleCreateOrConnectWithoutInstitutionInput {

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;

    @Field(() => AvailabilityRecurrenceRuleCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutInstitutionInput)
    create!: AvailabilityRecurrenceRuleCreateWithoutInstitutionInput;
}
