import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAvailability_recurrence_rulesInput } from './user-update-without-availability-recurrence-rules.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAvailability_recurrence_rulesInput } from './user-create-without-availability-recurrence-rules.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAvailability_recurrence_rulesInput {

    @Field(() => UserUpdateWithoutAvailability_recurrence_rulesInput, {nullable:false})
    @Type(() => UserUpdateWithoutAvailability_recurrence_rulesInput)
    update!: UserUpdateWithoutAvailability_recurrence_rulesInput;

    @Field(() => UserCreateWithoutAvailability_recurrence_rulesInput, {nullable:false})
    @Type(() => UserCreateWithoutAvailability_recurrence_rulesInput)
    create!: UserCreateWithoutAvailability_recurrence_rulesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
