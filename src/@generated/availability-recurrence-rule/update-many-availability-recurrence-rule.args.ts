import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleUpdateManyMutationInput } from './availability-recurrence-rule-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleWhereInput } from './availability-recurrence-rule-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAvailabilityRecurrenceRuleArgs {

    @Field(() => AvailabilityRecurrenceRuleUpdateManyMutationInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleUpdateManyMutationInput)
    data!: AvailabilityRecurrenceRuleUpdateManyMutationInput;

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereInput)
    where?: AvailabilityRecurrenceRuleWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
