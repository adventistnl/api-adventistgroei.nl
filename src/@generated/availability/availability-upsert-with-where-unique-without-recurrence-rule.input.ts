import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityUpdateWithoutRecurrence_ruleInput } from './availability-update-without-recurrence-rule.input';
import { AvailabilityCreateWithoutRecurrence_ruleInput } from './availability-create-without-recurrence-rule.input';

@InputType()
export class AvailabilityUpsertWithWhereUniqueWithoutRecurrence_ruleInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>;

    @Field(() => AvailabilityUpdateWithoutRecurrence_ruleInput, {nullable:false})
    @Type(() => AvailabilityUpdateWithoutRecurrence_ruleInput)
    update!: AvailabilityUpdateWithoutRecurrence_ruleInput;

    @Field(() => AvailabilityCreateWithoutRecurrence_ruleInput, {nullable:false})
    @Type(() => AvailabilityCreateWithoutRecurrence_ruleInput)
    create!: AvailabilityCreateWithoutRecurrence_ruleInput;
}
