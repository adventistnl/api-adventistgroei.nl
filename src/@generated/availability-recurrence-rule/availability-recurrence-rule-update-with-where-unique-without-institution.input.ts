import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleUpdateWithoutInstitutionInput } from './availability-recurrence-rule-update-without-institution.input';

@InputType()
export class AvailabilityRecurrenceRuleUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;

    @Field(() => AvailabilityRecurrenceRuleUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleUpdateWithoutInstitutionInput)
    data!: AvailabilityRecurrenceRuleUpdateWithoutInstitutionInput;
}
