import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumBudgetTransactionTypeWithAggregatesFilter } from '../prisma/enum-budget-transaction-type-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BudgetTransactionScalarWhereWithAggregatesInput {

    @Field(() => [BudgetTransactionScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => BudgetTransactionScalarWhereWithAggregatesInput)
    AND?: Array<BudgetTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [BudgetTransactionScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => BudgetTransactionScalarWhereWithAggregatesInput)
    OR?: Array<BudgetTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [BudgetTransactionScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => BudgetTransactionScalarWhereWithAggregatesInput)
    NOT?: Array<BudgetTransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    annual_budget_id?: StringWithAggregatesFilter;

    @Field(() => EnumBudgetTransactionTypeWithAggregatesFilter, {nullable:true})
    type?: EnumBudgetTransactionTypeWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    delta_allocated?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    delta_expenses?: DecimalWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    project_id?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    subsidy_request_id?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;
}
