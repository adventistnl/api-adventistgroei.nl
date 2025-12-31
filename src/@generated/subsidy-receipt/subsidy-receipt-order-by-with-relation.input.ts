import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { ProjectActivityOrderByWithRelationInput } from '../project-activity/project-activity-order-by-with-relation.input';
import { SubsidyRequestOrderByWithRelationInput } from '../subsidy-request/subsidy-request-order-by-with-relation.input';
import { SubsidyRequestItemOrderByWithRelationInput } from '../subsidy-request-item/subsidy-request-item-order-by-with-relation.input';

@InputType()
export class SubsidyReceiptOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_activities_id?: `${SortOrder}`;

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

    @Field(() => ProjectActivityOrderByWithRelationInput, {nullable:true})
    @Type(() => ProjectActivityOrderByWithRelationInput)
    project_activity?: ProjectActivityOrderByWithRelationInput;

    @Field(() => SubsidyRequestOrderByWithRelationInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByWithRelationInput)
    subsidy_request?: SubsidyRequestOrderByWithRelationInput;

    @Field(() => SubsidyRequestItemOrderByWithRelationInput, {nullable:true})
    @Type(() => SubsidyRequestItemOrderByWithRelationInput)
    subsidy_request_item?: SubsidyRequestItemOrderByWithRelationInput;
}
