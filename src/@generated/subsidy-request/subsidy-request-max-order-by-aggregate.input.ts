import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SubsidyRequestMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    requester_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_project_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    church_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    total_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidy_statuses_id?: `${SortOrder}`;

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

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    deleted_by?: `${SortOrder}`;
}
