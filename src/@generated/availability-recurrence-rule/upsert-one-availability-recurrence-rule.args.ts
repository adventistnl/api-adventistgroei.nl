import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateInput } from './availability-recurrence-rule-create.input';
import { AvailabilityRecurrenceRuleUpdateInput } from './availability-recurrence-rule-update.input';

@ArgsType()
export class UpsertOneAvailabilityRecurrenceRuleArgs {

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;

    @Field(() => AvailabilityRecurrenceRuleCreateInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateInput)
    create!: AvailabilityRecurrenceRuleCreateInput;

    @Field(() => AvailabilityRecurrenceRuleUpdateInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleUpdateInput)
    update!: AvailabilityRecurrenceRuleUpdateInput;
}
