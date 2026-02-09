import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SubsidyRequestSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    total_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    approved_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    advance_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    refund_amount?: `${SortOrder}`;
}
