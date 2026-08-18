import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCreateWithoutInstitutionInput } from './availability-recurrence-rule-create-without-institution.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateOrConnectWithoutInstitutionInput } from './availability-recurrence-rule-create-or-connect-without-institution.input';
import { AvailabilityRecurrenceRuleUpsertWithWhereUniqueWithoutInstitutionInput } from './availability-recurrence-rule-upsert-with-where-unique-without-institution.input';
import { AvailabilityRecurrenceRuleCreateManyInstitutionInputEnvelope } from './availability-recurrence-rule-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { AvailabilityRecurrenceRuleUpdateWithWhereUniqueWithoutInstitutionInput } from './availability-recurrence-rule-update-with-where-unique-without-institution.input';
import { AvailabilityRecurrenceRuleUpdateManyWithWhereWithoutInstitutionInput } from './availability-recurrence-rule-update-many-with-where-without-institution.input';
import { AvailabilityRecurrenceRuleScalarWhereInput } from './availability-recurrence-rule-scalar-where.input';

@InputType()
export class AvailabilityRecurrenceRuleUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [AvailabilityRecurrenceRuleCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutInstitutionInput)
    create?: Array<AvailabilityRecurrenceRuleCreateWithoutInstitutionInput>;

    @Field(() => [AvailabilityRecurrenceRuleCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AvailabilityRecurrenceRuleCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [AvailabilityRecurrenceRuleUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<AvailabilityRecurrenceRuleUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => AvailabilityRecurrenceRuleCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateManyInstitutionInputEnvelope)
    createMany?: AvailabilityRecurrenceRuleCreateManyInstitutionInputEnvelope;

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

    @Field(() => [AvailabilityRecurrenceRuleUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<AvailabilityRecurrenceRuleUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [AvailabilityRecurrenceRuleUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<AvailabilityRecurrenceRuleUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [AvailabilityRecurrenceRuleScalarWhereInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleScalarWhereInput)
    deleteMany?: Array<AvailabilityRecurrenceRuleScalarWhereInput>;
}
