import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PreacherRegionAccessCountOrderByAggregateInput } from './preacher-region-access-count-order-by-aggregate.input';
import { PreacherRegionAccessMaxOrderByAggregateInput } from './preacher-region-access-max-order-by-aggregate.input';
import { PreacherRegionAccessMinOrderByAggregateInput } from './preacher-region-access-min-order-by-aggregate.input';

@InputType()
export class PreacherRegionAccessOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    region_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => PreacherRegionAccessCountOrderByAggregateInput, {nullable:true})
    _count?: PreacherRegionAccessCountOrderByAggregateInput;

    @Field(() => PreacherRegionAccessMaxOrderByAggregateInput, {nullable:true})
    _max?: PreacherRegionAccessMaxOrderByAggregateInput;

    @Field(() => PreacherRegionAccessMinOrderByAggregateInput, {nullable:true})
    _min?: PreacherRegionAccessMinOrderByAggregateInput;
}
