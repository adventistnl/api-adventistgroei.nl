import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SubsidyRequestAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    total_budget?: `${SortOrder}`;
}
