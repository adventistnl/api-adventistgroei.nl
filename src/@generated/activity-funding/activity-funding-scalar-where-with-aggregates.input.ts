import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ActivityFundingScalarWhereWithAggregatesInput {

    @Field(() => [ActivityFundingScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ActivityFundingScalarWhereWithAggregatesInput)
    AND?: Array<ActivityFundingScalarWhereWithAggregatesInput>;

    @Field(() => [ActivityFundingScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ActivityFundingScalarWhereWithAggregatesInput)
    OR?: Array<ActivityFundingScalarWhereWithAggregatesInput>;

    @Field(() => [ActivityFundingScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ActivityFundingScalarWhereWithAggregatesInput)
    NOT?: Array<ActivityFundingScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    activity_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    entity_type?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    entity_id?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    contribution_amount?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    contribution_percent?: DecimalWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    validated?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
