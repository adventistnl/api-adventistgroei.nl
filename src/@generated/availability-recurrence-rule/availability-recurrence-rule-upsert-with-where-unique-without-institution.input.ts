import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleUpdateWithoutInstitutionInput } from './availability-recurrence-rule-update-without-institution.input';
import { AvailabilityRecurrenceRuleCreateWithoutInstitutionInput } from './availability-recurrence-rule-create-without-institution.input';

@InputType()
export class AvailabilityRecurrenceRuleUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;

    @Field(() => AvailabilityRecurrenceRuleUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleUpdateWithoutInstitutionInput)
    update!: AvailabilityRecurrenceRuleUpdateWithoutInstitutionInput;

    @Field(() => AvailabilityRecurrenceRuleCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutInstitutionInput)
    create!: AvailabilityRecurrenceRuleCreateWithoutInstitutionInput;
}
