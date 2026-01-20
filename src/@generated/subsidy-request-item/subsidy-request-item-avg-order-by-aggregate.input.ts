import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SubsidyRequestItemAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    requested_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    approved_amount?: `${SortOrder}`;
}
