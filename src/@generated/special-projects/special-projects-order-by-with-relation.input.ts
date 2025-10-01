import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { ProjectOrderByWithRelationInput } from '../project/project-order-by-with-relation.input';
import { SubsidyStatusOrderByWithRelationInput } from '../subsidy-status/subsidy-status-order-by-with-relation.input';

@InputType()
export class SpecialProjectsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    institution_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    project_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    justification_note?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    budget?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    subsidy_statuses_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    location_church_plant?: SortOrderInput;

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

    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    @Type(() => ProjectOrderByWithRelationInput)
    project?: ProjectOrderByWithRelationInput;

    @Field(() => SubsidyStatusOrderByWithRelationInput, {nullable:true})
    @Type(() => SubsidyStatusOrderByWithRelationInput)
    subsidy_status?: SubsidyStatusOrderByWithRelationInput;
}
