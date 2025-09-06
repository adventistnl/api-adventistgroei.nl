import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DepartmentCountOrderByAggregateInput } from './department-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { DepartmentAvgOrderByAggregateInput } from './department-avg-order-by-aggregate.input';
import { DepartmentMaxOrderByAggregateInput } from './department-max-order-by-aggregate.input';
import { DepartmentMinOrderByAggregateInput } from './department-min-order-by-aggregate.input';
import { DepartmentSumOrderByAggregateInput } from './department-sum-order-by-aggregate.input';

@InputType()
export class DepartmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    church_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    annual_budget?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    contact_id?: SortOrderInput;

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

    @Field(() => DepartmentCountOrderByAggregateInput, {nullable:true})
    @Type(() => DepartmentCountOrderByAggregateInput)
    _count?: DepartmentCountOrderByAggregateInput;

    @Field(() => DepartmentAvgOrderByAggregateInput, {nullable:true})
    @Type(() => DepartmentAvgOrderByAggregateInput)
    _avg?: DepartmentAvgOrderByAggregateInput;

    @Field(() => DepartmentMaxOrderByAggregateInput, {nullable:true})
    @Type(() => DepartmentMaxOrderByAggregateInput)
    _max?: DepartmentMaxOrderByAggregateInput;

    @Field(() => DepartmentMinOrderByAggregateInput, {nullable:true})
    @Type(() => DepartmentMinOrderByAggregateInput)
    _min?: DepartmentMinOrderByAggregateInput;

    @Field(() => DepartmentSumOrderByAggregateInput, {nullable:true})
    @Type(() => DepartmentSumOrderByAggregateInput)
    _sum?: DepartmentSumOrderByAggregateInput;
}
