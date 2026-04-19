import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AdjustmentTaskScalarWhereWithAggregatesInput {

    @Field(() => [AdjustmentTaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdjustmentTaskScalarWhereWithAggregatesInput>;

    @Field(() => [AdjustmentTaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdjustmentTaskScalarWhereWithAggregatesInput>;

    @Field(() => [AdjustmentTaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdjustmentTaskScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    adjustment_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    completed?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    position?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
