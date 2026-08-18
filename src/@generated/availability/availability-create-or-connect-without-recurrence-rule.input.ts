import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateWithoutRecurrence_ruleInput } from './availability-create-without-recurrence-rule.input';

@InputType()
export class AvailabilityCreateOrConnectWithoutRecurrence_ruleInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>;

    @Field(() => AvailabilityCreateWithoutRecurrence_ruleInput, {nullable:false})
    @Type(() => AvailabilityCreateWithoutRecurrence_ruleInput)
    create!: AvailabilityCreateWithoutRecurrence_ruleInput;
}
