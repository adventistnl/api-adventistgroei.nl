import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvailability_recurrence_rulesInput } from './user-create-without-availability-recurrence-rules.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAvailability_recurrence_rulesInput } from './user-create-or-connect-without-availability-recurrence-rules.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAvailability_recurrence_rulesInput {

    @Field(() => UserCreateWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => UserCreateWithoutAvailability_recurrence_rulesInput)
    create?: UserCreateWithoutAvailability_recurrence_rulesInput;

    @Field(() => UserCreateOrConnectWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAvailability_recurrence_rulesInput)
    connectOrCreate?: UserCreateOrConnectWithoutAvailability_recurrence_rulesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
