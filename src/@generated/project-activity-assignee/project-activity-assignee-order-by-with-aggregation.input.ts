import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProjectActivityAssigneeCountOrderByAggregateInput } from './project-activity-assignee-count-order-by-aggregate.input';
import { ProjectActivityAssigneeMaxOrderByAggregateInput } from './project-activity-assignee-max-order-by-aggregate.input';
import { ProjectActivityAssigneeMinOrderByAggregateInput } from './project-activity-assignee-min-order-by-aggregate.input';

@InputType()
export class ProjectActivityAssigneeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    activity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => ProjectActivityAssigneeCountOrderByAggregateInput, {nullable:true})
    _count?: ProjectActivityAssigneeCountOrderByAggregateInput;

    @Field(() => ProjectActivityAssigneeMaxOrderByAggregateInput, {nullable:true})
    _max?: ProjectActivityAssigneeMaxOrderByAggregateInput;

    @Field(() => ProjectActivityAssigneeMinOrderByAggregateInput, {nullable:true})
    _min?: ProjectActivityAssigneeMinOrderByAggregateInput;
}
