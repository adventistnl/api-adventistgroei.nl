import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProjectHistoryCountOrderByAggregateInput } from './project-history-count-order-by-aggregate.input';
import { ProjectHistoryMaxOrderByAggregateInput } from './project-history-max-order-by-aggregate.input';
import { ProjectHistoryMinOrderByAggregateInput } from './project-history-min-order-by-aggregate.input';

@InputType()
export class ProjectHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    comment?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    field_name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    old_value?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    new_value?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => ProjectHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: ProjectHistoryCountOrderByAggregateInput;

    @Field(() => ProjectHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: ProjectHistoryMaxOrderByAggregateInput;

    @Field(() => ProjectHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: ProjectHistoryMinOrderByAggregateInput;
}
