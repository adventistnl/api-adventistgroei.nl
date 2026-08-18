import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AvailabilityStatus } from '../prisma/availability-status.enum';
import { AvailabilitySource } from '../prisma/availability-source.enum';
import { Institution } from '../institution/institution.model';
import { User } from '../user/user.model';
import { AvailabilityRecurrenceRule } from '../availability-recurrence-rule/availability-recurrence-rule.model';

@ObjectType()
export class Availability {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => AvailabilityStatus, {nullable:false})
    status!: `${AvailabilityStatus}`;

    @Field(() => AvailabilitySource, {defaultValue:'MANUAL',nullable:false})
    source!: `${AvailabilitySource}`;

    @Field(() => String, {nullable:true})
    recurrence_rule_id!: string | null;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => AvailabilityRecurrenceRule, {nullable:true})
    recurrence_rule?: AvailabilityRecurrenceRule | null;
}
