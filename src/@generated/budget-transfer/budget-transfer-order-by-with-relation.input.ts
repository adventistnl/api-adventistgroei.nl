import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AnnualBudgetOrderByWithRelationInput } from '../annual-budget/annual-budget-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class BudgetTransferOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    from_budget_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    to_budget_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => AnnualBudgetOrderByWithRelationInput, {nullable:true})
    @Type(() => AnnualBudgetOrderByWithRelationInput)
    from_budget?: AnnualBudgetOrderByWithRelationInput;

    @Field(() => AnnualBudgetOrderByWithRelationInput, {nullable:true})
    @Type(() => AnnualBudgetOrderByWithRelationInput)
    to_budget?: AnnualBudgetOrderByWithRelationInput;
}
