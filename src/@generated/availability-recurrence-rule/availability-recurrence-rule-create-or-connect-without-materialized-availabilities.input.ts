import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput } from './availability-recurrence-rule-create-without-materialized-availabilities.input';

@InputType()
export class AvailabilityRecurrenceRuleCreateOrConnectWithoutMaterialized_availabilitiesInput {

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;

    @Field(() => AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput)
    create!: AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput;
}
