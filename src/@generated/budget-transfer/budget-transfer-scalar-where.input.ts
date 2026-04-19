import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumTransferTypeFilter } from '../prisma/enum-transfer-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BudgetTransferScalarWhereInput {

    @Field(() => [BudgetTransferScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransferScalarWhereInput)
    AND?: Array<BudgetTransferScalarWhereInput>;

    @Field(() => [BudgetTransferScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransferScalarWhereInput)
    OR?: Array<BudgetTransferScalarWhereInput>;

    @Field(() => [BudgetTransferScalarWhereInput], {nullable:true})
    @Type(() => BudgetTransferScalarWhereInput)
    NOT?: Array<BudgetTransferScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
