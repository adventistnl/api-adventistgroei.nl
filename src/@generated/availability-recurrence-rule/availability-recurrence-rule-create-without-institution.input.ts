import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurrenceType } from '../prisma/recurrence-type.enum';
import { AvailabilityStatus } from '../prisma/availability-status.enum';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAvailability_recurrence_rulesInput } from '../user/user-create-nested-one-without-availability-recurrence-rules.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateNestedManyWithoutRecurrence_ruleInput } from '../availability/availability-create-nested-many-without-recurrence-rule.input';

@InputType()
export class AvailabilityRecurrenceRuleCreateWithoutInstitutionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => RecurrenceType, {nullable:false})
    type!: `${RecurrenceType}`;

    @Field(() => AvailabilityStatus, {nullable:false})
    status!: `${AvailabilityStatus}`;

    @Field(() => Int, {nullable:true})
    day_of_week?: number;

    @Field(() => Date, {nullable:true})
    start_date?: Date | string;

    @Field(() => Date, {nullable:true})
    end_date?: Date | string;

    @Field(() => Date, {nullable:false})
    effective_from!: Date | string;

    @Field(() => Date, {nullable:true})
    effective_until?: Date | string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => UserCreateNestedOneWithoutAvailability_recurrence_rulesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutAvailability_recurrence_rulesInput)
    user!: UserCreateNestedOneWithoutAvailability_recurrence_rulesInput;

    @Field(() => AvailabilityCreateNestedManyWithoutRecurrence_ruleInput, {nullable:true})
    materialized_availabilities?: AvailabilityCreateNestedManyWithoutRecurrence_ruleInput;
}
