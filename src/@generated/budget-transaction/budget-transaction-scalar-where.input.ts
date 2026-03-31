import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumBudgetTransactionTypeFilter } from '../prisma/enum-budget-transaction-type-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BudgetTransactionScalarWhereInput {

    @Field(() => [BudgetTransactionScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransactionScalarWhereInput)
    AND?: Array<BudgetTransactionScalarWhereInput>;

    @Field(() => [BudgetTransactionScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransactionScalarWhereInput)
    OR?: Array<BudgetTransactionScalarWhereInput>;

    @Field(() => [BudgetTransactionScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransactionScalarWhereInput)
    NOT?: Array<BudgetTransactionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    annual_budget_id?: StringFilter;

    @Field(() => EnumBudgetTransactionTypeFilter, {nullable:true})
    type?: EnumBudgetTransactionTypeFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    delta_allocated?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    delta_expenses?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    project_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subsidy_request_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;
}
