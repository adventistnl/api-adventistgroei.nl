import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubsidyReceiptCountAggregate } from './subsidy-receipt-count-aggregate.output';
import { SubsidyReceiptAvgAggregate } from './subsidy-receipt-avg-aggregate.output';
import { SubsidyReceiptSumAggregate } from './subsidy-receipt-sum-aggregate.output';
import { SubsidyReceiptMinAggregate } from './subsidy-receipt-min-aggregate.output';
import { SubsidyReceiptMaxAggregate } from './subsidy-receipt-max-aggregate.output';

@ObjectType()
export class AggregateSubsidyReceipt {

    @Field(() => SubsidyReceiptCountAggregate, {nullable:true})
    _count?: SubsidyReceiptCountAggregate;

    @Field(() => SubsidyReceiptAvgAggregate, {nullable:true})
    _avg?: SubsidyReceiptAvgAggregate;

    @Field(() => SubsidyReceiptSumAggregate, {nullable:true})
    _sum?: SubsidyReceiptSumAggregate;

    @Field(() => SubsidyReceiptMinAggregate, {nullable:true})
    _min?: SubsidyReceiptMinAggregate;

    @Field(() => SubsidyReceiptMaxAggregate, {nullable:true})
    _max?: SubsidyReceiptMaxAggregate;
}
