import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProjectActivityCountOrderByAggregateInput } from './project-activity-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { ProjectActivityAvgOrderByAggregateInput } from './project-activity-avg-order-by-aggregate.input';
import { ProjectActivityMaxOrderByAggregateInput } from './project-activity-max-order-by-aggregate.input';
import { ProjectActivityMinOrderByAggregateInput } from './project-activity-min-order-by-aggregate.input';
import { ProjectActivitySumOrderByAggregateInput } from './project-activity-sum-order-by-aggregate.input';

@InputType()
export class ProjectActivityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidy_request_id?: `${SortOrder}`;

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

    @Field(() => ProjectActivityCountOrderByAggregateInput, {nullable:true})
    @Type(() => ProjectActivityCountOrderByAggregateInput)
    _count?: ProjectActivityCountOrderByAggregateInput;

    @Field(() => ProjectActivityAvgOrderByAggregateInput, {nullable:true})
    @Type(() => ProjectActivityAvgOrderByAggregateInput)
    _avg?: ProjectActivityAvgOrderByAggregateInput;

    @Field(() => ProjectActivityMaxOrderByAggregateInput, {nullable:true})
    @Type(() => ProjectActivityMaxOrderByAggregateInput)
    _max?: ProjectActivityMaxOrderByAggregateInput;

    @Field(() => ProjectActivityMinOrderByAggregateInput, {nullable:true})
    @Type(() => ProjectActivityMinOrderByAggregateInput)
    _min?: ProjectActivityMinOrderByAggregateInput;

    @Field(() => ProjectActivitySumOrderByAggregateInput, {nullable:true})
    @Type(() => ProjectActivitySumOrderByAggregateInput)
    _sum?: ProjectActivitySumOrderByAggregateInput;
}
