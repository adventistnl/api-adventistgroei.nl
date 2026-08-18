import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateWithoutRecurrence_ruleInput } from './availability-create-without-recurrence-rule.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateOrConnectWithoutRecurrence_ruleInput } from './availability-create-or-connect-without-recurrence-rule.input';
import { AvailabilityCreateManyRecurrence_ruleInputEnvelope } from './availability-create-many-recurrence-rule-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';

@InputType()
export class AvailabilityCreateNestedManyWithoutRecurrence_ruleInput {

    @Field(() => [AvailabilityCreateWithoutRecurrence_ruleInput], {nullable:true})
    @Type(() => AvailabilityCreateWithoutRecurrence_ruleInput)
    create?: Array<AvailabilityCreateWithoutRecurrence_ruleInput>;

    @Field(() => [AvailabilityCreateOrConnectWithoutRecurrence_ruleInput], {nullable:true})
    @Type(() => AvailabilityCreateOrConnectWithoutRecurrence_ruleInput)
    connectOrCreate?: Array<AvailabilityCreateOrConnectWithoutRecurrence_ruleInput>;

    @Field(() => AvailabilityCreateManyRecurrence_ruleInputEnvelope, {nullable:true})
    @Type(() => AvailabilityCreateManyRecurrence_ruleInputEnvelope)
    createMany?: AvailabilityCreateManyRecurrence_ruleInputEnvelope;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;
}
