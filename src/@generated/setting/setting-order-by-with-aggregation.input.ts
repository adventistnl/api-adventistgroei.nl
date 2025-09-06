import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SettingCountOrderByAggregateInput } from './setting-count-order-by-aggregate.input';
import { SettingMaxOrderByAggregateInput } from './setting-max-order-by-aggregate.input';
import { SettingMinOrderByAggregateInput } from './setting-min-order-by-aggregate.input';

@InputType()
export class SettingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    key?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

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

    @Field(() => SettingCountOrderByAggregateInput, {nullable:true})
    _count?: SettingCountOrderByAggregateInput;

    @Field(() => SettingMaxOrderByAggregateInput, {nullable:true})
    _max?: SettingMaxOrderByAggregateInput;

    @Field(() => SettingMinOrderByAggregateInput, {nullable:true})
    _min?: SettingMinOrderByAggregateInput;
}
