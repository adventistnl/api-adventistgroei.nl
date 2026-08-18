import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleUpdateInput } from './availability-recurrence-rule-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';

@ArgsType()
export class UpdateOneAvailabilityRecurrenceRuleArgs {

    @Field(() => AvailabilityRecurrenceRuleUpdateInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleUpdateInput)
    data!: AvailabilityRecurrenceRuleUpdateInput;

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;
}
