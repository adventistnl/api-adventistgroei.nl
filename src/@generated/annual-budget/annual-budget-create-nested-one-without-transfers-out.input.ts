import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutTransfers_outInput } from './annual-budget-create-without-transfers-out.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutTransfers_outInput } from './annual-budget-create-or-connect-without-transfers-out.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetCreateNestedOneWithoutTransfers_outInput {

    @Field(() => AnnualBudgetCreateWithoutTransfers_outInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutTransfers_outInput)
    create?: AnnualBudgetCreateWithoutTransfers_outInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutTransfers_outInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutTransfers_outInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutTransfers_outInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;
}
