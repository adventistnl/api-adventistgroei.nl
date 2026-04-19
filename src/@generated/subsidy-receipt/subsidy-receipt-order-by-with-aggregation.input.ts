import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCountOrderByAggregateInput } from './subsidy-receipt-count-order-by-aggregate.input';
import { SubsidyReceiptAvgOrderByAggregateInput } from './subsidy-receipt-avg-order-by-aggregate.input';
import { SubsidyReceiptMaxOrderByAggregateInput } from './subsidy-receipt-max-order-by-aggregate.input';
import { SubsidyReceiptMinOrderByAggregateInput } from './subsidy-receipt-min-order-by-aggregate.input';
import { SubsidyReceiptSumOrderByAggregateInput } from './subsidy-receipt-sum-order-by-aggregate.input';

@InputType()
export class SubsidyReceiptOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    project_activities_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    is_refund_receipt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    file_url?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    drive_file_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    filename?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    amount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    approved?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_validated?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    validated_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    validated_by?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    rejection_reason?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    note?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    uploaded_by?: `${SortOrder}`;

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

    @Field(() => SortOrderInput, {nullable:true})
    subsidy_request_item_id?: SortOrderInput;

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
