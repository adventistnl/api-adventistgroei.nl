import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutApproved_userInput } from './annual-budget-update-without-approved-user.input';
import { AnnualBudgetCreateWithoutApproved_userInput } from './annual-budget-create-without-approved-user.input';

@InputType()
export class AnnualBudgetUpsertWithWhereUniqueWithoutApproved_userInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateWithoutApproved_userInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutApproved_userInput)
    update!: AnnualBudgetUpdateWithoutApproved_userInput;

    @Field(() => AnnualBudgetCreateWithoutApproved_userInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutApproved_userInput)
    create!: AnnualBudgetCreateWithoutApproved_userInput;
}
