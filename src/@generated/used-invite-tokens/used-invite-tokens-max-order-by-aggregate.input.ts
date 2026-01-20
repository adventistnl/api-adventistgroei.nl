import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UsedInviteTokensMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    usedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tokenExpiresAt?: `${SortOrder}`;
}
