import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProjectActivityOrderByWithRelationInput } from '../project-activity/project-activity-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class ActivityDocumentsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    activity_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    file_url?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    drive_file_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    filename?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_validated?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    uploaded_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    validated_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    project_activity_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    updated_by?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => ProjectActivityOrderByWithRelationInput, {nullable:true})
    @Type(() => ProjectActivityOrderByWithRelationInput)
    project_activity?: ProjectActivityOrderByWithRelationInput;
}
