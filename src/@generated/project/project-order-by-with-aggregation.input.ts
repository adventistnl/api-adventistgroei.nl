import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProjectCountOrderByAggregateInput } from './project-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { ProjectAvgOrderByAggregateInput } from './project-avg-order-by-aggregate.input';
import { ProjectMaxOrderByAggregateInput } from './project-max-order-by-aggregate.input';
import { ProjectMinOrderByAggregateInput } from './project-min-order-by-aggregate.input';
import { ProjectSumOrderByAggregateInput } from './project-sum-order-by-aggregate.input';

@InputType()
export class ProjectOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidized_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    balance?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    owner_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_private?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    required_volunteers?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    start_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    end_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deadline?: SortOrderInput;

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
    event_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    institution_id?: SortOrderInput;

    @Field(() => ProjectCountOrderByAggregateInput, {nullable:true})
    @Type(() => ProjectCountOrderByAggregateInput)
    _count?: ProjectCountOrderByAggregateInput;

    @Field(() => ProjectAvgOrderByAggregateInput, {nullable:true})
    @Type(() => ProjectAvgOrderByAggregateInput)
    _avg?: ProjectAvgOrderByAggregateInput;

    @Field(() => ProjectMaxOrderByAggregateInput, {nullable:true})
    @Type(() => ProjectMaxOrderByAggregateInput)
    _max?: ProjectMaxOrderByAggregateInput;

    @Field(() => ProjectMinOrderByAggregateInput, {nullable:true})
    @Type(() => ProjectMinOrderByAggregateInput)
    _min?: ProjectMinOrderByAggregateInput;

    @Field(() => ProjectSumOrderByAggregateInput, {nullable:true})
    @Type(() => ProjectSumOrderByAggregateInput)
    _sum?: ProjectSumOrderByAggregateInput;
}
