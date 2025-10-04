import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProjectActivityOrderByWithRelationInput } from '../project-activity/project-activity-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class ActivityFundingOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    activity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_contribution_amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_contribution_percent?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    validated?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => ProjectActivityOrderByWithRelationInput, {nullable:true})
    @Type(() => ProjectActivityOrderByWithRelationInput)
    activity?: ProjectActivityOrderByWithRelationInput;
}
