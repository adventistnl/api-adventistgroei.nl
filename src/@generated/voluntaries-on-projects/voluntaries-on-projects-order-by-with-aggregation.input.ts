import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VoluntariesOnProjectsCountOrderByAggregateInput } from './voluntaries-on-projects-count-order-by-aggregate.input';
import { VoluntariesOnProjectsMaxOrderByAggregateInput } from './voluntaries-on-projects-max-order-by-aggregate.input';
import { VoluntariesOnProjectsMinOrderByAggregateInput } from './voluntaries-on-projects-min-order-by-aggregate.input';

@InputType()
export class VoluntariesOnProjectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_id?: `${SortOrder}`;

    @Field(() => VoluntariesOnProjectsCountOrderByAggregateInput, {nullable:true})
    _count?: VoluntariesOnProjectsCountOrderByAggregateInput;

    @Field(() => VoluntariesOnProjectsMaxOrderByAggregateInput, {nullable:true})
    _max?: VoluntariesOnProjectsMaxOrderByAggregateInput;

    @Field(() => VoluntariesOnProjectsMinOrderByAggregateInput, {nullable:true})
    _min?: VoluntariesOnProjectsMinOrderByAggregateInput;
}
