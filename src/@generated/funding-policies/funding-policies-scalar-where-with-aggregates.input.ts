import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEntityTypeWithAggregatesFilter } from '../prisma/enum-entity-type-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FundingPoliciesScalarWhereWithAggregatesInput {

    @Field(() => [FundingPoliciesScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => FundingPoliciesScalarWhereWithAggregatesInput)
    AND?: Array<FundingPoliciesScalarWhereWithAggregatesInput>;

    @Field(() => [FundingPoliciesScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => FundingPoliciesScalarWhereWithAggregatesInput)
    OR?: Array<FundingPoliciesScalarWhereWithAggregatesInput>;

    @Field(() => [FundingPoliciesScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => FundingPoliciesScalarWhereWithAggregatesInput)
    NOT?: Array<FundingPoliciesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumEntityTypeWithAggregatesFilter, {nullable:true})
    entity_type?: EnumEntityTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    entity_id?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    max_percent?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    annual_cap?: DecimalWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    year?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;
}
