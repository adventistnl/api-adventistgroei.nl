import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityStatus } from '../prisma/availability-status.enum';
import { AvailabilitySource } from '../prisma/availability-source.enum';
import { InstitutionCreateNestedOneWithoutAvailabilitiesInput } from '../institution/institution-create-nested-one-without-availabilities.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutAvailabilitiesInput } from '../user/user-create-nested-one-without-availabilities.input';

@InputType()
export class AvailabilityCreateWithoutRecurrence_ruleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => AvailabilityStatus, {nullable:false})
    status!: `${AvailabilityStatus}`;

    @Field(() => AvailabilitySource, {nullable:true})
    source?: `${AvailabilitySource}`;

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

    @Field(() => InstitutionCreateNestedOneWithoutAvailabilitiesInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutAvailabilitiesInput)
    institution!: InstitutionCreateNestedOneWithoutAvailabilitiesInput;

    @Field(() => UserCreateNestedOneWithoutAvailabilitiesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutAvailabilitiesInput)
    user!: UserCreateNestedOneWithoutAvailabilitiesInput;
}
