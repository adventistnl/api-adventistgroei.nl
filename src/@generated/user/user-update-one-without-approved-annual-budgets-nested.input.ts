import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutApproved_annual_budgetsInput } from './user-create-without-approved-annual-budgets.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutApproved_annual_budgetsInput } from './user-create-or-connect-without-approved-annual-budgets.input';
import { UserUpsertWithoutApproved_annual_budgetsInput } from './user-upsert-without-approved-annual-budgets.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutApproved_annual_budgetsInput } from './user-update-to-one-with-where-without-approved-annual-budgets.input';

@InputType()
export class UserUpdateOneWithoutApproved_annual_budgetsNestedInput {

    @Field(() => UserCreateWithoutApproved_annual_budgetsInput, {nullable:true})
    @Type(() => UserCreateWithoutApproved_annual_budgetsInput)
    create?: UserCreateWithoutApproved_annual_budgetsInput;

    @Field(() => UserCreateOrConnectWithoutApproved_annual_budgetsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutApproved_annual_budgetsInput)
    connectOrCreate?: UserCreateOrConnectWithoutApproved_annual_budgetsInput;

    @Field(() => UserUpsertWithoutApproved_annual_budgetsInput, {nullable:true})
    @Type(() => UserUpsertWithoutApproved_annual_budgetsInput)
    upsert?: UserUpsertWithoutApproved_annual_budgetsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutApproved_annual_budgetsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutApproved_annual_budgetsInput)
    update?: UserUpdateToOneWithWhereWithoutApproved_annual_budgetsInput;
}
