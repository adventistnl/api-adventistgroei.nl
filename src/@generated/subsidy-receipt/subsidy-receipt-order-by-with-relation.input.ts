import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProjectActivityOrderByWithRelationInput } from '../project-activity/project-activity-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { SubsidyRequestOrderByWithRelationInput } from '../subsidy-request/subsidy-request-order-by-with-relation.input';

@InputType()
export class SubsidyReceiptOrderByWithRelationInput {

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

    @Field(() => ProjectActivityOrderByWithRelationInput, {nullable:true})
    @Type(() => ProjectActivityOrderByWithRelationInput)
    project_activity?: ProjectActivityOrderByWithRelationInput;

    @Field(() => SubsidyRequestOrderByWithRelationInput, {nullable:true})
    @Type(() => SubsidyRequestOrderByWithRelationInput)
    subsidy_request?: SubsidyRequestOrderByWithRelationInput;
}
