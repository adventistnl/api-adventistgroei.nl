import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubsidyRequestOrderByRelationAggregateInput } from '../subsidy-request/subsidy-request-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { ProjectOrderByWithRelationInput } from '../project/project-order-by-with-relation.input';
import { SubsidyReceiptOrderByRelationAggregateInput } from '../subsidy-receipt/subsidy-receipt-order-by-relation-aggregate.input';
import { ActivityDocumentsOrderByRelationAggregateInput } from '../activity-documents/activity-documents-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ActivityFundingOrderByWithRelationInput } from '../activity-funding/activity-funding-order-by-with-relation.input';
import { ProjectActivityLogOrderByRelationAggregateInput } from '../project-activity-log/project-activity-log-order-by-relation-aggregate.input';

@InputType()
export class ProjectActivityOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    budget_amount?: `${SortOrder}`;

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

    @Field(() => SortOrder, {nullable:true})
    deadline?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    owner_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tags?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    custom_tags?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    activity_tag?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    priority?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_subsidized?: `${SortOrder}`;

    @Field(() => SubsidyRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByRelationAggregateInput)
    subsidy_request?: SubsidyRequestOrderByRelationAggregateInput;

    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    @Type(() => ProjectOrderByWithRelationInput)
    project?: ProjectOrderByWithRelationInput;

    @Field(() => SubsidyReceiptOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptOrderByRelationAggregateInput)
    subsidy_receipts?: SubsidyReceiptOrderByRelationAggregateInput;

    @Field(() => ActivityDocumentsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ActivityDocumentsOrderByRelationAggregateInput)
    activity_documents?: ActivityDocumentsOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    owner?: UserOrderByWithRelationInput;

    @Field(() => ActivityFundingOrderByWithRelationInput, {nullable:true})
    @Type(() => ActivityFundingOrderByWithRelationInput)
    activity_funding?: ActivityFundingOrderByWithRelationInput;

    @Field(() => ProjectActivityLogOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProjectActivityLogOrderByRelationAggregateInput)
    logs?: ProjectActivityLogOrderByRelationAggregateInput;
}
