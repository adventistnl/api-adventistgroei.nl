import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput } from './availability-recurrence-rule-create-without-materialized-availabilities.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateOrConnectWithoutMaterialized_availabilitiesInput } from './availability-recurrence-rule-create-or-connect-without-materialized-availabilities.input';
import { AvailabilityRecurrenceRuleUpsertWithoutMaterialized_availabilitiesInput } from './availability-recurrence-rule-upsert-without-materialized-availabilities.input';
import { AvailabilityRecurrenceRuleWhereInput } from './availability-recurrence-rule-where.input';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { AvailabilityRecurrenceRuleUpdateToOneWithWhereWithoutMaterialized_availabilitiesInput } from './availability-recurrence-rule-update-to-one-with-where-without-materialized-availabilities.input';

@InputType()
export class AvailabilityRecurrenceRuleUpdateOneWithoutMaterialized_availabilitiesNestedInput {

    @Field(() => AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput)
    create?: AvailabilityRecurrenceRuleCreateWithoutMaterialized_availabilitiesInput;

    @Field(() => AvailabilityRecurrenceRuleCreateOrConnectWithoutMaterialized_availabilitiesInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateOrConnectWithoutMaterialized_availabilitiesInput)
    connectOrCreate?: AvailabilityRecurrenceRuleCreateOrConnectWithoutMaterialized_availabilitiesInput;

    @Field(() => AvailabilityRecurrenceRuleUpsertWithoutMaterialized_availabilitiesInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleUpsertWithoutMaterialized_availabilitiesInput)
    upsert?: AvailabilityRecurrenceRuleUpsertWithoutMaterialized_availabilitiesInput;

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereInput)
    disconnect?: AvailabilityRecurrenceRuleWhereInput;

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereInput)
    delete?: AvailabilityRecurrenceRuleWhereInput;

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    connect?: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;

    @Field(() => AvailabilityRecurrenceRuleUpdateToOneWithWhereWithoutMaterialized_availabilitiesInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleUpdateToOneWithWhereWithoutMaterialized_availabilitiesInput)
    update?: AvailabilityRecurrenceRuleUpdateToOneWithWhereWithoutMaterialized_availabilitiesInput;
}
