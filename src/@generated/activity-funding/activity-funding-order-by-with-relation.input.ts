import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ActivityFundingOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    activity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contribution_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contribution_percent?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    validated?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;
}
