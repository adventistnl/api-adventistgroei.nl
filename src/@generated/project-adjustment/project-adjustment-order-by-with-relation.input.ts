import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProjectHistoryOrderByWithRelationInput } from '../project-history/project-history-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskOrderByRelationAggregateInput } from '../adjustment-task/adjustment-task-order-by-relation-aggregate.input';

@InputType()
export class ProjectAdjustmentOrderByWithRelationInput {

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

    @Field(() => ProjectHistoryOrderByWithRelationInput, {nullable:true})
    @Type(() => ProjectHistoryOrderByWithRelationInput)
    project_history?: ProjectHistoryOrderByWithRelationInput;

    @Field(() => AdjustmentTaskOrderByRelationAggregateInput, {nullable:true})
    tasks?: AdjustmentTaskOrderByRelationAggregateInput;
}
