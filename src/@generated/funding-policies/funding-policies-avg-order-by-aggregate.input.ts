import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FundingPoliciesAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    max_percent?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    annual_cap?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    year?: `${SortOrder}`;
}
