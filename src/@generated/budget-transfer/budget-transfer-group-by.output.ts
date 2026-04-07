import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { TransferType } from '../prisma/transfer-type.enum';
import { BudgetTransferCountAggregate } from './budget-transfer-count-aggregate.output';
import { BudgetTransferAvgAggregate } from './budget-transfer-avg-aggregate.output';
import { BudgetTransferSumAggregate } from './budget-transfer-sum-aggregate.output';
import { BudgetTransferMinAggregate } from './budget-transfer-min-aggregate.output';
import { BudgetTransferMaxAggregate } from './budget-transfer-max-aggregate.output';

@ObjectType()
export class BudgetTransferGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    from_budget_id?: string;

    @Field(() => String, {nullable:true})
    to_budget_id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => TransferType, {nullable:false})
    type!: `${TransferType}`;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => BudgetTransferCountAggregate, {nullable:true})
    _count?: BudgetTransferCountAggregate;

    @Field(() => BudgetTransferAvgAggregate, {nullable:true})
    _avg?: BudgetTransferAvgAggregate;

    @Field(() => BudgetTransferSumAggregate, {nullable:true})
    _sum?: BudgetTransferSumAggregate;

    @Field(() => BudgetTransferMinAggregate, {nullable:true})
    _min?: BudgetTransferMinAggregate;

    @Field(() => BudgetTransferMaxAggregate, {nullable:true})
    _max?: BudgetTransferMaxAggregate;
}
