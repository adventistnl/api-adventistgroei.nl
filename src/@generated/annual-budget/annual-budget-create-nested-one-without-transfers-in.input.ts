import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutTransfers_inInput } from './annual-budget-create-without-transfers-in.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutTransfers_inInput } from './annual-budget-create-or-connect-without-transfers-in.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetCreateNestedOneWithoutTransfers_inInput {

    @Field(() => AnnualBudgetCreateWithoutTransfers_inInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutTransfers_inInput)
    create?: AnnualBudgetCreateWithoutTransfers_inInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutTransfers_inInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutTransfers_inInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutTransfers_inInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;
}
