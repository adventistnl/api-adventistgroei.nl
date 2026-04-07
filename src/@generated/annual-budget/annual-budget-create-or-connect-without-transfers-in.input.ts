import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutTransfers_inInput } from './annual-budget-create-without-transfers-in.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutTransfers_inInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutTransfers_inInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutTransfers_inInput)
    create!: AnnualBudgetCreateWithoutTransfers_inInput;
}
