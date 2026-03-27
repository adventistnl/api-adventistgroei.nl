import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AdjustmentTaskSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;
}
