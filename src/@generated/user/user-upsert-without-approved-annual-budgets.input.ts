import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutApproved_annual_budgetsInput } from './user-update-without-approved-annual-budgets.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutApproved_annual_budgetsInput } from './user-create-without-approved-annual-budgets.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutApproved_annual_budgetsInput {

    @Field(() => UserUpdateWithoutApproved_annual_budgetsInput, {nullable:false})
    @Type(() => UserUpdateWithoutApproved_annual_budgetsInput)
    update!: UserUpdateWithoutApproved_annual_budgetsInput;

    @Field(() => UserCreateWithoutApproved_annual_budgetsInput, {nullable:false})
    @Type(() => UserCreateWithoutApproved_annual_budgetsInput)
    create!: UserCreateWithoutApproved_annual_budgetsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
