import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SubsidyReceiptMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_activities_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    file_path?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    approved?: `${SortOrder}`;

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

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    deleted_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subsidy_request_id?: `${SortOrder}`;
}
