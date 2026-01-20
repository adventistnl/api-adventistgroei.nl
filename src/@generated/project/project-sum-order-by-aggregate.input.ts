import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProjectSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidized_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    balance?: `${SortOrder}`;
}
