import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutApproved_annual_budgetsInput } from './user-update-without-approved-annual-budgets.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutApproved_annual_budgetsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutApproved_annual_budgetsInput, {nullable:false})
    @Type(() => UserUpdateWithoutApproved_annual_budgetsInput)
    data!: UserUpdateWithoutApproved_annual_budgetsInput;
}
