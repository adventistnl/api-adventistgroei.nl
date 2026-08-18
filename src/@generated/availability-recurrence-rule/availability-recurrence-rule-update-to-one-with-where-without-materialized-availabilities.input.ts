import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleWhereInput } from './availability-recurrence-rule-where.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleUpdateWithoutMaterialized_availabilitiesInput } from './availability-recurrence-rule-update-without-materialized-availabilities.input';

@InputType()
export class AvailabilityRecurrenceRuleUpdateToOneWithWhereWithoutMaterialized_availabilitiesInput {

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereInput)
    where?: AvailabilityRecurrenceRuleWhereInput;

    @Field(() => AvailabilityRecurrenceRuleUpdateWithoutMaterialized_availabilitiesInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleUpdateWithoutMaterialized_availabilitiesInput)
    data!: AvailabilityRecurrenceRuleUpdateWithoutMaterialized_availabilitiesInput;
}
