import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { TransferType } from '../prisma/transfer-type.enum';
import { AnnualBudgetCreateNestedOneWithoutTransfers_inInput } from '../annual-budget/annual-budget-create-nested-one-without-transfers-in.input';

@InputType()
export class BudgetTransferCreateWithoutFrom_budgetInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    amount!: Decimal;

    @Field(() => TransferType, {nullable:false})
    type!: `${TransferType}`;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => AnnualBudgetCreateNestedOneWithoutTransfers_inInput, {nullable:true})
    @Type(() => AnnualBudgetCreateNestedOneWithoutTransfers_inInput)
    to_budget?: AnnualBudgetCreateNestedOneWithoutTransfers_inInput;
}
