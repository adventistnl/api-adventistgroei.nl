import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { SpecialProjectsCountOrderByAggregateInput } from './special-projects-count-order-by-aggregate.input';
import { SpecialProjectsAvgOrderByAggregateInput } from './special-projects-avg-order-by-aggregate.input';
import { SpecialProjectsMaxOrderByAggregateInput } from './special-projects-max-order-by-aggregate.input';
import { SpecialProjectsMinOrderByAggregateInput } from './special-projects-min-order-by-aggregate.input';
import { SpecialProjectsSumOrderByAggregateInput } from './special-projects-sum-order-by-aggregate.input';

@InputType()
export class SpecialProjectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    institution_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    project_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    justification_note?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    budget?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    subsidy_status_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    location_church_plant?: SortOrderInput;

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

    @Field(() => SpecialProjectsCountOrderByAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsCountOrderByAggregateInput)
    _count?: SpecialProjectsCountOrderByAggregateInput;

    @Field(() => SpecialProjectsAvgOrderByAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsAvgOrderByAggregateInput)
    _avg?: SpecialProjectsAvgOrderByAggregateInput;

    @Field(() => SpecialProjectsMaxOrderByAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsMaxOrderByAggregateInput)
    _max?: SpecialProjectsMaxOrderByAggregateInput;

    @Field(() => SpecialProjectsMinOrderByAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsMinOrderByAggregateInput)
    _min?: SpecialProjectsMinOrderByAggregateInput;

    @Field(() => SpecialProjectsSumOrderByAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsSumOrderByAggregateInput)
    _sum?: SpecialProjectsSumOrderByAggregateInput;
}
