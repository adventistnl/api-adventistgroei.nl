import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutApproved_annual_budgetsInput } from './user-create-without-approved-annual-budgets.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutApproved_annual_budgetsInput } from './user-create-or-connect-without-approved-annual-budgets.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutApproved_annual_budgetsInput {

    @Field(() => UserCreateWithoutApproved_annual_budgetsInput, {nullable:true})
    @Type(() => UserCreateWithoutApproved_annual_budgetsInput)
    create?: UserCreateWithoutApproved_annual_budgetsInput;

    @Field(() => UserCreateOrConnectWithoutApproved_annual_budgetsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutApproved_annual_budgetsInput)
    connectOrCreate?: UserCreateOrConnectWithoutApproved_annual_budgetsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
