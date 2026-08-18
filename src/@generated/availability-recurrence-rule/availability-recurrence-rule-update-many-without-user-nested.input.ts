import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCreateWithoutUserInput } from './availability-recurrence-rule-create-without-user.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateOrConnectWithoutUserInput } from './availability-recurrence-rule-create-or-connect-without-user.input';
import { AvailabilityRecurrenceRuleUpsertWithWhereUniqueWithoutUserInput } from './availability-recurrence-rule-upsert-with-where-unique-without-user.input';
import { AvailabilityRecurrenceRuleCreateManyUserInputEnvelope } from './availability-recurrence-rule-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { AvailabilityRecurrenceRuleUpdateWithWhereUniqueWithoutUserInput } from './availability-recurrence-rule-update-with-where-unique-without-user.input';
import { AvailabilityRecurrenceRuleUpdateManyWithWhereWithoutUserInput } from './availability-recurrence-rule-update-many-with-where-without-user.input';
import { AvailabilityRecurrenceRuleScalarWhereInput } from './availability-recurrence-rule-scalar-where.input';

@InputType()
export class AvailabilityRecurrenceRuleUpdateManyWithoutUserNestedInput {

    @Field(() => [AvailabilityRecurrenceRuleCreateWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutUserInput)
    create?: Array<AvailabilityRecurrenceRuleCreateWithoutUserInput>;

    @Field(() => [AvailabilityRecurrenceRuleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AvailabilityRecurrenceRuleCreateOrConnectWithoutUserInput>;

    @Field(() => [AvailabilityRecurrenceRuleUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AvailabilityRecurrenceRuleUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AvailabilityRecurrenceRuleCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateManyUserInputEnvelope)
    createMany?: AvailabilityRecurrenceRuleCreateManyUserInputEnvelope;

    @Field(() => [AvailabilityRecurrenceRuleWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>>;

    @Field(() => [AvailabilityRecurrenceRuleWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>>;

    @Field(() => [AvailabilityRecurrenceRuleWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>>;

    @Field(() => [AvailabilityRecurrenceRuleWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>>;

    @Field(() => [AvailabilityRecurrenceRuleUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AvailabilityRecurrenceRuleUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AvailabilityRecurrenceRuleUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AvailabilityRecurrenceRuleUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AvailabilityRecurrenceRuleScalarWhereInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleScalarWhereInput)
    deleteMany?: Array<AvailabilityRecurrenceRuleScalarWhereInput>;
}
