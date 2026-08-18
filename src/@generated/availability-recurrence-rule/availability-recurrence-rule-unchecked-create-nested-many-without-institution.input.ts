import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleCreateWithoutInstitutionInput } from './availability-recurrence-rule-create-without-institution.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleCreateOrConnectWithoutInstitutionInput } from './availability-recurrence-rule-create-or-connect-without-institution.input';
import { AvailabilityRecurrenceRuleCreateManyInstitutionInputEnvelope } from './availability-recurrence-rule-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';

@InputType()
export class AvailabilityRecurrenceRuleUncheckedCreateNestedManyWithoutInstitutionInput {

    @Field(() => [AvailabilityRecurrenceRuleCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateWithoutInstitutionInput)
    create?: Array<AvailabilityRecurrenceRuleCreateWithoutInstitutionInput>;

    @Field(() => [AvailabilityRecurrenceRuleCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AvailabilityRecurrenceRuleCreateOrConnectWithoutInstitutionInput>;

    @Field(() => AvailabilityRecurrenceRuleCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleCreateManyInstitutionInputEnvelope)
    createMany?: AvailabilityRecurrenceRuleCreateManyInstitutionInputEnvelope;

    @Field(() => [AvailabilityRecurrenceRuleWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>>;
}
