import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BudgetTransferWhereInput } from './budget-transfer-where.input';
import { Type } from 'class-transformer';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumTransferTypeFilter } from '../prisma/enum-transfer-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AnnualBudgetNullableScalarRelationFilter } from '../annual-budget/annual-budget-nullable-scalar-relation-filter.input';

@InputType()
export class BudgetTransferWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [BudgetTransferWhereInput], {nullable:true})
    @Type(() => BudgetTransferWhereInput)
    AND?: Array<BudgetTransferWhereInput>;

    @Field(() => [BudgetTransferWhereInput], {nullable:true})
    @Type(() => BudgetTransferWhereInput)
    OR?: Array<BudgetTransferWhereInput>;

    @Field(() => [BudgetTransferWhereInput], {nullable:true})
    @Type(() => BudgetTransferWhereInput)
    NOT?: Array<BudgetTransferWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    from_budget_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    to_budget_id?: StringNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    amount?: DecimalFilter;

    @Field(() => EnumTransferTypeFilter, {nullable:true})
    type?: EnumTransferTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => AnnualBudgetNullableScalarRelationFilter, {nullable:true})
    @Type(() => AnnualBudgetNullableScalarRelationFilter)
    from_budget?: AnnualBudgetNullableScalarRelationFilter;

    @Field(() => AnnualBudgetNullableScalarRelationFilter, {nullable:true})
    @Type(() => AnnualBudgetNullableScalarRelationFilter)
    to_budget?: AnnualBudgetNullableScalarRelationFilter;
}
