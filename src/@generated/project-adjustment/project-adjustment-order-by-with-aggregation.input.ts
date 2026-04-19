import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProjectAdjustmentCountOrderByAggregateInput } from './project-adjustment-count-order-by-aggregate.input';
import { ProjectAdjustmentMaxOrderByAggregateInput } from './project-adjustment-max-order-by-aggregate.input';
import { ProjectAdjustmentMinOrderByAggregateInput } from './project-adjustment-min-order-by-aggregate.input';

@InputType()
export class ProjectAdjustmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_history_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: `${SortOrder}`;

    @Field(() => ProjectAdjustmentCountOrderByAggregateInput, {nullable:true})
    _count?: ProjectAdjustmentCountOrderByAggregateInput;

    @Field(() => ProjectAdjustmentMaxOrderByAggregateInput, {nullable:true})
    _max?: ProjectAdjustmentMaxOrderByAggregateInput;

    @Field(() => ProjectAdjustmentMinOrderByAggregateInput, {nullable:true})
    _min?: ProjectAdjustmentMinOrderByAggregateInput;
}
