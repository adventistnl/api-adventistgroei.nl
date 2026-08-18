import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAvailability_recurrence_rulesInput } from './user-create-without-availability-recurrence-rules.input';

@InputType()
export class UserCreateOrConnectWithoutAvailability_recurrence_rulesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutAvailability_recurrence_rulesInput, {nullable:false})
    @Type(() => UserCreateWithoutAvailability_recurrence_rulesInput)
    create!: UserCreateWithoutAvailability_recurrence_rulesInput;
}
