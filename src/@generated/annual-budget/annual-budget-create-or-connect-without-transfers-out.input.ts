import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutTransfers_outInput } from './annual-budget-create-without-transfers-out.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutTransfers_outInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutTransfers_outInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutTransfers_outInput)
    create!: AnnualBudgetCreateWithoutTransfers_outInput;
}
