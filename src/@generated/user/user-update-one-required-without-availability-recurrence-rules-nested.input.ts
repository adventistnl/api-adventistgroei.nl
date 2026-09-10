import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvailability_recurrence_rulesInput } from './user-create-without-availability-recurrence-rules.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAvailability_recurrence_rulesInput } from './user-create-or-connect-without-availability-recurrence-rules.input';
import { UserUpsertWithoutAvailability_recurrence_rulesInput } from './user-upsert-without-availability-recurrence-rules.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAvailability_recurrence_rulesInput } from './user-update-to-one-with-where-without-availability-recurrence-rules.input';

@InputType()
export class UserUpdateOneRequiredWithoutAvailability_recurrence_rulesNestedInput {

    @Field(() => UserCreateWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => UserCreateWithoutAvailability_recurrence_rulesInput)
    create?: UserCreateWithoutAvailability_recurrence_rulesInput;

    @Field(() => UserCreateOrConnectWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAvailability_recurrence_rulesInput)
    connectOrCreate?: UserCreateOrConnectWithoutAvailability_recurrence_rulesInput;

    @Field(() => UserUpsertWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => UserUpsertWithoutAvailability_recurrence_rulesInput)
    upsert?: UserUpsertWithoutAvailability_recurrence_rulesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAvailability_recurrence_rulesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAvailability_recurrence_rulesInput)
    update?: UserUpdateToOneWithWhereWithoutAvailability_recurrence_rulesInput;
}
