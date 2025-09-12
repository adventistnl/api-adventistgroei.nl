import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProjectActivitySumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    budget_amount?: `${SortOrder}`;
}
