import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleScalarWhereInput } from './availability-recurrence-rule-scalar-where.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleUpdateManyMutationInput } from './availability-recurrence-rule-update-many-mutation.input';

@InputType()
export class AvailabilityRecurrenceRuleUpdateManyWithWhereWithoutInstitutionInput {

    @Field(() => AvailabilityRecurrenceRuleScalarWhereInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleScalarWhereInput)
    where!: AvailabilityRecurrenceRuleScalarWhereInput;

    @Field(() => AvailabilityRecurrenceRuleUpdateManyMutationInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleUpdateManyMutationInput)
    data!: AvailabilityRecurrenceRuleUpdateManyMutationInput;
}
