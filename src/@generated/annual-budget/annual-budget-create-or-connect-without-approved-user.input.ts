import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutApproved_userInput } from './annual-budget-create-without-approved-user.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutApproved_userInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutApproved_userInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutApproved_userInput)
    create!: AnnualBudgetCreateWithoutApproved_userInput;
}
