import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { ChurchOrderByWithRelationInput } from '../church/church-order-by-with-relation.input';
import { SubsidyStatusOrderByWithRelationInput } from '../subsidy-status/subsidy-status-order-by-with-relation.input';
import { SubsidyRequestItemOrderByRelationAggregateInput } from '../subsidy-request-item/subsidy-request-item-order-by-relation-aggregate.input';
import { ProjectOrderByWithRelationInput } from '../project/project-order-by-with-relation.input';
import { SubsidyReceiptOrderByRelationAggregateInput } from '../subsidy-receipt/subsidy-receipt-order-by-relation-aggregate.input';

@InputType()
export class SubsidyRequestOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    total_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    approved_amount?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    rejection_reason?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    approved_at?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    approved_by?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    requester_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    church_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    subsidy_statuses_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_id?: `${SortOrder}`;

    @Field(() => InstitutionOrderByWithRelationInput, {nullable:true})
    @Type(() => InstitutionOrderByWithRelationInput)
    institution?: InstitutionOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    requester?: UserOrderByWithRelationInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    @Type(() => DepartmentOrderByWithRelationInput)
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => ChurchOrderByWithRelationInput, {nullable:true})
    @Type(() => ChurchOrderByWithRelationInput)
    church?: ChurchOrderByWithRelationInput;

    @Field(() => SubsidyStatusOrderByWithRelationInput, {nullable:true})
    @Type(() => SubsidyStatusOrderByWithRelationInput)
    subsidy_status?: SubsidyStatusOrderByWithRelationInput;

    @Field(() => SubsidyRequestItemOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyRequestItemOrderByRelationAggregateInput)
    items?: SubsidyRequestItemOrderByRelationAggregateInput;

    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    @Type(() => ProjectOrderByWithRelationInput)
    project?: ProjectOrderByWithRelationInput;

    @Field(() => SubsidyReceiptOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubsidyReceiptOrderByRelationAggregateInput)
    subsidy_receipts?: SubsidyReceiptOrderByRelationAggregateInput;
}
