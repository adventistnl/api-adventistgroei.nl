import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { SubsidyReceiptCountAggregate } from './subsidy-receipt-count-aggregate.output';
import { SubsidyReceiptAvgAggregate } from './subsidy-receipt-avg-aggregate.output';
import { SubsidyReceiptSumAggregate } from './subsidy-receipt-sum-aggregate.output';
import { SubsidyReceiptMinAggregate } from './subsidy-receipt-min-aggregate.output';
import { SubsidyReceiptMaxAggregate } from './subsidy-receipt-max-aggregate.output';

@ObjectType()
export class SubsidyReceiptGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    subsidy_activities_id!: string;

    @Field(() => String, {nullable:false})
    file_path!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => Boolean, {nullable:false})
    approved!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

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
