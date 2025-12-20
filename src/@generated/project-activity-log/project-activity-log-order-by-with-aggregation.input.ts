import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProjectActivityLogCountOrderByAggregateInput } from './project-activity-log-count-order-by-aggregate.input';
import { ProjectActivityLogMaxOrderByAggregateInput } from './project-activity-log-max-order-by-aggregate.input';
import { ProjectActivityLogMinOrderByAggregateInput } from './project-activity-log-min-order-by-aggregate.input';

@InputType()
export class ProjectActivityLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    activity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    action?: `${SortOrder}`;

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

    @Field(() => ProjectActivityLogCountOrderByAggregateInput, {nullable:true})
    _count?: ProjectActivityLogCountOrderByAggregateInput;

    @Field(() => ProjectActivityLogMaxOrderByAggregateInput, {nullable:true})
    _max?: ProjectActivityLogMaxOrderByAggregateInput;

    @Field(() => ProjectActivityLogMinOrderByAggregateInput, {nullable:true})
    _min?: ProjectActivityLogMinOrderByAggregateInput;
}
