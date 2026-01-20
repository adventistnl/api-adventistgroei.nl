import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SpecialProjectsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    budget?: `${SortOrder}`;
}
