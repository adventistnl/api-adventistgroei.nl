import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AnnualBudgetSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    year?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    planned_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    total_expenses?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    balance?: `${SortOrder}`;
}
