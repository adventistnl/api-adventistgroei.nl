import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ActivityFundingSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    contribution_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contribution_percent?: `${SortOrder}`;
}
