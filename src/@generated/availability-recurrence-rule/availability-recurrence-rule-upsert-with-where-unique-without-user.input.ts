import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleUpdateWithoutUserInput } from './availability-recurrence-rule-update-without-user.input';
import { AvailabilityRecurrenceRuleCreateWithoutUserInput } from './availability-recurrence-rule-create-without-user.input';

@InputType()
export class AvailabilityRecurrenceRuleUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;

    @Field(() => AvailabilityRecurrenceRuleUpdateWithoutUserInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleUpdateWithoutUserInput)
    update!: AvailabilityRecurrenceRuleUpdateWithoutUserInput;

    @Field(() => AvailabilityRecurrenceRuleCreateWithoutUserInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutUserInput)
    create!: AvailabilityRecurrenceRuleCreateWithoutUserInput;
}
