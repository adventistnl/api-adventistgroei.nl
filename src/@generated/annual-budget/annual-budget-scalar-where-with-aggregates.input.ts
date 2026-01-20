import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumAnnualBudgetStatusWithAggregatesFilter } from '../prisma/enum-annual-budget-status-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';
import { EnumAnnualBudgetPriorityWithAggregatesFilter } from '../prisma/enum-annual-budget-priority-with-aggregates-filter.input';
import { EnumAnnualBudgetCategoryWithAggregatesFilter } from '../prisma/enum-annual-budget-category-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { EnumAnnualBudgetEntityTypeWithAggregatesFilter } from '../prisma/enum-annual-budget-entity-type-with-aggregates-filter.input';

@InputType()
export class AnnualBudgetScalarWhereWithAggregatesInput {

    @Field(() => [AnnualBudgetScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => AnnualBudgetScalarWhereWithAggregatesInput)
    AND?: Array<AnnualBudgetScalarWhereWithAggregatesInput>;

    @Field(() => [AnnualBudgetScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => AnnualBudgetScalarWhereWithAggregatesInput)
    OR?: Array<AnnualBudgetScalarWhereWithAggregatesInput>;

    @Field(() => [AnnualBudgetScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => AnnualBudgetScalarWhereWithAggregatesInput)
    NOT?: Array<AnnualBudgetScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    year?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    planned_budget?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    total_expenses?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    balance?: DecimalWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    justification?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    approved_by?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    updated_by?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_deleted?: BoolWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deleted_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    deleted_by?: StringNullableWithAggregatesFilter;

    @Field(() => EnumAnnualBudgetStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAnnualBudgetStatusWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    institution_id?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    church_id?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    department_id?: StringNullableWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    allocated_amount?: DecimalWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    approved_amount?: DecimalNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    requested_by?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    reviewed_by?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    submitted_date?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    review_date?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    approval_date?: DateTimeNullableWithAggregatesFilter;

    @Field(() => EnumAnnualBudgetPriorityWithAggregatesFilter, {nullable:true})
    priority?: EnumAnnualBudgetPriorityWithAggregatesFilter;

    @Field(() => EnumAnnualBudgetCategoryWithAggregatesFilter, {nullable:true})
    category?: EnumAnnualBudgetCategoryWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    documents?: JsonNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_locked?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    has_budget_record?: BoolWithAggregatesFilter;

    @Field(() => EnumAnnualBudgetEntityTypeWithAggregatesFilter, {nullable:true})
    entity_type?: EnumAnnualBudgetEntityTypeWithAggregatesFilter;
}
