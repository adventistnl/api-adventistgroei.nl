import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubsidyRequestOrderByWithRelationInput } from '../subsidy-request/subsidy-request-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ProjectActivityOrderByWithRelationInput } from '../project-activity/project-activity-order-by-with-relation.input';
import { SubsidyReceiptOrderByRelationAggregateInput } from '../subsidy-receipt/subsidy-receipt-order-by-relation-aggregate.input';

@InputType()
export class SubsidyRequestItemOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidy_request_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_activity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    requested_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    approved_amount?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => SubsidyRequestOrderByWithRelationInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByWithRelationInput)
    subsidy_request?: SubsidyRequestOrderByWithRelationInput;

    @Field(() => ProjectActivityOrderByWithRelationInput, {nullable:true})
    @Type(() => ProjectActivityOrderByWithRelationInput)
    project_activity?: ProjectActivityOrderByWithRelationInput;

    @Field(() => SubsidyReceiptOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptOrderByRelationAggregateInput)
    subsidy_receipts?: SubsidyReceiptOrderByRelationAggregateInput;
}
