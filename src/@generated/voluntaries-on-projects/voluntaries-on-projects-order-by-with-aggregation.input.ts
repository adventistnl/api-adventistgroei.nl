import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { VoluntariesOnProjectsCountOrderByAggregateInput } from './voluntaries-on-projects-count-order-by-aggregate.input';
import { VoluntariesOnProjectsMaxOrderByAggregateInput } from './voluntaries-on-projects-max-order-by-aggregate.input';
import { VoluntariesOnProjectsMinOrderByAggregateInput } from './voluntaries-on-projects-min-order-by-aggregate.input';

@InputType()
export class VoluntariesOnProjectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_id?: `${SortOrder}`;

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

    @Field(() => VoluntariesOnProjectsCountOrderByAggregateInput, {nullable:true})
    _count?: VoluntariesOnProjectsCountOrderByAggregateInput;

    @Field(() => VoluntariesOnProjectsMaxOrderByAggregateInput, {nullable:true})
    _max?: VoluntariesOnProjectsMaxOrderByAggregateInput;

    @Field(() => VoluntariesOnProjectsMinOrderByAggregateInput, {nullable:true})
    _min?: VoluntariesOnProjectsMinOrderByAggregateInput;
}
