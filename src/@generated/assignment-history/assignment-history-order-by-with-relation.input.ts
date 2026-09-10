import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class AssignmentHistoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    assignment_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    field_name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    old_value?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    new_value?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    changed_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    changed_at?: `${SortOrder}`;
}
