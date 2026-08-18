import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AssignmentHistoryMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    assignment_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    field_name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    old_value?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    new_value?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    changed_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    changed_at?: `${SortOrder}`;
}
