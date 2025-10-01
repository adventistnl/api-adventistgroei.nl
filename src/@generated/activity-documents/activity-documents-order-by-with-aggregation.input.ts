import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ActivityDocumentsCountOrderByAggregateInput } from './activity-documents-count-order-by-aggregate.input';
import { ActivityDocumentsMaxOrderByAggregateInput } from './activity-documents-max-order-by-aggregate.input';
import { ActivityDocumentsMinOrderByAggregateInput } from './activity-documents-min-order-by-aggregate.input';

@InputType()
export class ActivityDocumentsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    activity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    file_url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_validated?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    uploaded_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    validated_at?: SortOrderInput;

    @Field(() => ActivityDocumentsCountOrderByAggregateInput, {nullable:true})
    _count?: ActivityDocumentsCountOrderByAggregateInput;

    @Field(() => ActivityDocumentsMaxOrderByAggregateInput, {nullable:true})
    _max?: ActivityDocumentsMaxOrderByAggregateInput;

    @Field(() => ActivityDocumentsMinOrderByAggregateInput, {nullable:true})
    _min?: ActivityDocumentsMinOrderByAggregateInput;
}
