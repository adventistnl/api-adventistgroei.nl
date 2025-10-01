import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubsidyReceiptCountOrderByAggregateInput } from './subsidy-receipt-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptAvgOrderByAggregateInput } from './subsidy-receipt-avg-order-by-aggregate.input';
import { SubsidyReceiptMaxOrderByAggregateInput } from './subsidy-receipt-max-order-by-aggregate.input';
import { SubsidyReceiptMinOrderByAggregateInput } from './subsidy-receipt-min-order-by-aggregate.input';
import { SubsidyReceiptSumOrderByAggregateInput } from './subsidy-receipt-sum-order-by-aggregate.input';

@InputType()
export class SubsidyReceiptOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_activities_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    file_path?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    approved?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    subsidy_request_id?: SortOrderInput;

    @Field(() => SubsidyReceiptCountOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptCountOrderByAggregateInput)
    _count?: SubsidyReceiptCountOrderByAggregateInput;

    @Field(() => SubsidyReceiptAvgOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptAvgOrderByAggregateInput)
    _avg?: SubsidyReceiptAvgOrderByAggregateInput;

    @Field(() => SubsidyReceiptMaxOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptMaxOrderByAggregateInput)
    _max?: SubsidyReceiptMaxOrderByAggregateInput;

    @Field(() => SubsidyReceiptMinOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptMinOrderByAggregateInput)
    _min?: SubsidyReceiptMinOrderByAggregateInput;

    @Field(() => SubsidyReceiptSumOrderByAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptSumOrderByAggregateInput)
    _sum?: SubsidyReceiptSumOrderByAggregateInput;
}
