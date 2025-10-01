import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SpecialProjectsSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    budget?: `${SortOrder}`;
}
