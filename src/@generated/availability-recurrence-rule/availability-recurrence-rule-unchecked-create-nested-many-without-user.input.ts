import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCreateWithoutUserInput } from './availability-recurrence-rule-create-without-user.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateOrConnectWithoutUserInput } from './availability-recurrence-rule-create-or-connect-without-user.input';
import { AvailabilityRecurrenceRuleCreateManyUserInputEnvelope } from './availability-recurrence-rule-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';

@InputType()
export class AvailabilityRecurrenceRuleUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AvailabilityRecurrenceRuleCreateWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutUserInput)
    create?: Array<AvailabilityRecurrenceRuleCreateWithoutUserInput>;

    @Field(() => [AvailabilityRecurrenceRuleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AvailabilityRecurrenceRuleCreateOrConnectWithoutUserInput>;

    @Field(() => AvailabilityRecurrenceRuleCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateManyUserInputEnvelope)
    createMany?: AvailabilityRecurrenceRuleCreateManyUserInputEnvelope;

    @Field(() => [AvailabilityRecurrenceRuleWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>>;
}
