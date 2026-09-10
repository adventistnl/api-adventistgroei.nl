import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCreateManyInstitutionInput } from './availability-recurrence-rule-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class AvailabilityRecurrenceRuleCreateManyInstitutionInputEnvelope {

    @Field(() => [AvailabilityRecurrenceRuleCreateManyInstitutionInput], {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateManyInstitutionInput)
    data!: Array<AvailabilityRecurrenceRuleCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
