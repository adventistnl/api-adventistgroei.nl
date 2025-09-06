import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MissionProjectCountOrderByAggregateInput } from './mission-project-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { MissionProjectAvgOrderByAggregateInput } from './mission-project-avg-order-by-aggregate.input';
import { MissionProjectMaxOrderByAggregateInput } from './mission-project-max-order-by-aggregate.input';
import { MissionProjectMinOrderByAggregateInput } from './mission-project-min-order-by-aggregate.input';
import { MissionProjectSumOrderByAggregateInput } from './mission-project-sum-order-by-aggregate.input';

@InputType()
export class MissionProjectOrderByWithAggregationInput {

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
    media_link?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    language_preference?: `${SortOrder}`;

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
    institution_id?: SortOrderInput;

    @Field(() => MissionProjectCountOrderByAggregateInput, {nullable:true})
    @Type(() => MissionProjectCountOrderByAggregateInput)
    _count?: MissionProjectCountOrderByAggregateInput;

    @Field(() => MissionProjectAvgOrderByAggregateInput, {nullable:true})
    @Type(() => MissionProjectAvgOrderByAggregateInput)
    _avg?: MissionProjectAvgOrderByAggregateInput;

    @Field(() => MissionProjectMaxOrderByAggregateInput, {nullable:true})
    @Type(() => MissionProjectMaxOrderByAggregateInput)
    _max?: MissionProjectMaxOrderByAggregateInput;

    @Field(() => MissionProjectMinOrderByAggregateInput, {nullable:true})
    @Type(() => MissionProjectMinOrderByAggregateInput)
    _min?: MissionProjectMinOrderByAggregateInput;

    @Field(() => MissionProjectSumOrderByAggregateInput, {nullable:true})
    @Type(() => MissionProjectSumOrderByAggregateInput)
    _sum?: MissionProjectSumOrderByAggregateInput;
}
