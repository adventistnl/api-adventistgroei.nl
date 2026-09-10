import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAvailabilityRecurrenceRuleOrThrowArgs {

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;
}
