import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { EnumTransferTypeWithAggregatesFilter } from '../prisma/enum-transfer-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BudgetTransferScalarWhereWithAggregatesInput {

    @Field(() => [BudgetTransferScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => BudgetTransferScalarWhereWithAggregatesInput)
    AND?: Array<BudgetTransferScalarWhereWithAggregatesInput>;

    @Field(() => [BudgetTransferScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => BudgetTransferScalarWhereWithAggregatesInput)
    OR?: Array<BudgetTransferScalarWhereWithAggregatesInput>;

    @Field(() => [BudgetTransferScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => BudgetTransferScalarWhereWithAggregatesInput)
    NOT?: Array<BudgetTransferScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    from_budget_id?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    to_budget_id?: StringNullableWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    amount?: DecimalWithAggregatesFilter;

    @Field(() => EnumTransferTypeWithAggregatesFilter, {nullable:true})
    type?: EnumTransferTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    created_by?: StringWithAggregatesFilter;
}
