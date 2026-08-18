import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateWithoutUserInput } from './availability-recurrence-rule-create-without-user.input';

@InputType()
export class AvailabilityRecurrenceRuleCreateOrConnectWithoutUserInput {

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;

    @Field(() => AvailabilityRecurrenceRuleCreateWithoutUserInput, {nullable:false})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutUserInput)
    create!: AvailabilityRecurrenceRuleCreateWithoutUserInput;
}
