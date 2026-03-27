import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProjectAdjustmentOrderByWithRelationInput } from '../project-adjustment/project-adjustment-order-by-with-relation.input';

@InputType()
export class AdjustmentTaskOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    adjustment_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    completed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => ProjectAdjustmentOrderByWithRelationInput, {nullable:true})
    adjustment?: ProjectAdjustmentOrderByWithRelationInput;
}
