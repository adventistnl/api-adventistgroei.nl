import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AnnualReportCountOrderByAggregateInput } from './annual-report-count-order-by-aggregate.input';
import { AnnualReportMaxOrderByAggregateInput } from './annual-report-max-order-by-aggregate.input';
import { AnnualReportMinOrderByAggregateInput } from './annual-report-min-order-by-aggregate.input';

@InputType()
export class AnnualReportOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    department_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    text?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    file_path?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    submission_date?: `${SortOrder}`;

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

    @Field(() => AnnualReportCountOrderByAggregateInput, {nullable:true})
    _count?: AnnualReportCountOrderByAggregateInput;

    @Field(() => AnnualReportMaxOrderByAggregateInput, {nullable:true})
    _max?: AnnualReportMaxOrderByAggregateInput;

    @Field(() => AnnualReportMinOrderByAggregateInput, {nullable:true})
    _min?: AnnualReportMinOrderByAggregateInput;
}
