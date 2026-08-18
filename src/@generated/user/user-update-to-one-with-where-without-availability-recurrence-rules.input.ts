import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAvailability_recurrence_rulesInput } from './user-update-without-availability-recurrence-rules.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAvailability_recurrence_rulesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAvailability_recurrence_rulesInput, {nullable:false})
    @Type(() => UserUpdateWithoutAvailability_recurrence_rulesInput)
    data!: UserUpdateWithoutAvailability_recurrence_rulesInput;
}
