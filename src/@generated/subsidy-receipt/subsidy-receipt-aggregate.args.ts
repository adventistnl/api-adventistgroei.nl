import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyReceiptWhereInput } from './subsidy-receipt-where.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptOrderByWithRelationInput } from './subsidy-receipt-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyReceiptCountAggregateInput } from './subsidy-receipt-count-aggregate.input';
import { SubsidyReceiptAvgAggregateInput } from './subsidy-receipt-avg-aggregate.input';
import { SubsidyReceiptSumAggregateInput } from './subsidy-receipt-sum-aggregate.input';
import { SubsidyReceiptMinAggregateInput } from './subsidy-receipt-min-aggregate.input';
import { SubsidyReceiptMaxAggregateInput } from './subsidy-receipt-max-aggregate.input';

@ArgsType()
export class SubsidyReceiptAggregateArgs {

    @Field(() => SubsidyReceiptWhereInput, {nullable:true})
    @Type(() => SubsidyReceiptWhereInput)
    where?: SubsidyReceiptWhereInput;

    @Field(() => [SubsidyReceiptOrderByWithRelationInput], {nullable:true})
    @Type(() => SubsidyReceiptOrderByWithRelationInput)
    orderBy?: Array<SubsidyReceiptOrderByWithRelationInput>;

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    cursor?: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubsidyReceiptCountAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptCountAggregateInput)
    _count?: SubsidyReceiptCountAggregateInput;

    @Field(() => SubsidyReceiptAvgAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptAvgAggregateInput)
    _avg?: SubsidyReceiptAvgAggregateInput;

    @Field(() => SubsidyReceiptSumAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptSumAggregateInput)
    _sum?: SubsidyReceiptSumAggregateInput;

    @Field(() => SubsidyReceiptMinAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptMinAggregateInput)
    _min?: SubsidyReceiptMinAggregateInput;

    @Field(() => SubsidyReceiptMaxAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptMaxAggregateInput)
    _max?: SubsidyReceiptMaxAggregateInput;
}
