import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EventAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    max_participants?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ticket_amount?: `${SortOrder}`;
}
