import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput } from './availability-recurrence-rule-create-without-materialized-availabilities.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateOrConnectWithoutMaterialized_availabilitiesInput } from './availability-recurrence-rule-create-or-connect-without-materialized-availabilities.input';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';

@InputType()
export class AvailabilityRecurrenceRuleCreateNestedOneWithoutMaterialized_availabilitiesInput {

    @Field(() => AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput)
    create?: AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput;

    @Field(() => AvailabilityRecurrenceRuleCreateOrConnectWithoutMaterialized_availabilitiesInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateOrConnectWithoutMaterialized_availabilitiesInput)
    connectOrCreate?: AvailabilityRecurrenceRuleCreateOrConnectWithoutMaterialized_availabilitiesInput;

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    connect?: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;
}
