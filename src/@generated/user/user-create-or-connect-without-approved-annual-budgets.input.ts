import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutApproved_annual_budgetsInput } from './user-create-without-approved-annual-budgets.input';

@InputType()
export class UserCreateOrConnectWithoutApproved_annual_budgetsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutApproved_annual_budgetsInput, {nullable:false})
    @Type(() => UserCreateWithoutApproved_annual_budgetsInput)
    create!: UserCreateWithoutApproved_annual_budgetsInput;
}
