import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleUpdateWithoutMaterialized_availabilitiesInput } from './availability-recurrence-rule-update-without-materialized-availabilities.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput } from './availability-recurrence-rule-create-without-materialized-availabilities.input';
import { AvailabilityRecurrenceRuleWhereInput } from './availability-recurrence-rule-where.input';

@InputType()
export class AvailabilityRecurrenceRuleUpsertWithoutMaterialized_availabilitiesInput {

    @Field(() => AvailabilityRecurrenceRuleUpdateWithoutMaterialized_availabilitiesInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleUpdateWithoutMaterialized_availabilitiesInput)
    update!: AvailabilityRecurrenceRuleUpdateWithoutMaterialized_availabilitiesInput;

    @Field(() => AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput)
    create!: AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput;

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereInput)
    where?: AvailabilityRecurrenceRuleWhereInput;
}
