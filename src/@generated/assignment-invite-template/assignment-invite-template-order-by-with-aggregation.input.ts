import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AssignmentInviteTemplateCountOrderByAggregateInput } from './assignment-invite-template-count-order-by-aggregate.input';
import { AssignmentInviteTemplateMaxOrderByAggregateInput } from './assignment-invite-template-max-order-by-aggregate.input';
import { AssignmentInviteTemplateMinOrderByAggregateInput } from './assignment-invite-template-min-order-by-aggregate.input';

@InputType()
export class AssignmentInviteTemplateOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subject?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    body?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => AssignmentInviteTemplateCountOrderByAggregateInput, {nullable:true})
    _count?: AssignmentInviteTemplateCountOrderByAggregateInput;

    @Field(() => AssignmentInviteTemplateMaxOrderByAggregateInput, {nullable:true})
    _max?: AssignmentInviteTemplateMaxOrderByAggregateInput;

    @Field(() => AssignmentInviteTemplateMinOrderByAggregateInput, {nullable:true})
    _min?: AssignmentInviteTemplateMinOrderByAggregateInput;
}
