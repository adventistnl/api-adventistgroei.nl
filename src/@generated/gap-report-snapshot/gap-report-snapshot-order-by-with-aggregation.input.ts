import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GapReportSnapshotCountOrderByAggregateInput } from './gap-report-snapshot-count-order-by-aggregate.input';
import { GapReportSnapshotMaxOrderByAggregateInput } from './gap-report-snapshot-max-order-by-aggregate.input';
import { GapReportSnapshotMinOrderByAggregateInput } from './gap-report-snapshot-min-order-by-aggregate.input';

@InputType()
export class GapReportSnapshotOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    month?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    churches_without_preacher?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    preachers_without_assignment?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    computed_at?: `${SortOrder}`;

    @Field(() => GapReportSnapshotCountOrderByAggregateInput, {nullable:true})
    _count?: GapReportSnapshotCountOrderByAggregateInput;

    @Field(() => GapReportSnapshotMaxOrderByAggregateInput, {nullable:true})
    _max?: GapReportSnapshotMaxOrderByAggregateInput;

    @Field(() => GapReportSnapshotMinOrderByAggregateInput, {nullable:true})
    _min?: GapReportSnapshotMinOrderByAggregateInput;
}
