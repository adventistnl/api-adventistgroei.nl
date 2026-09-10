import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class GapReportSnapshotOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    month?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    churches_without_preacher?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    preachers_without_assignment?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    computed_at?: `${SortOrder}`;

    @Field(() => InstitutionOrderByWithRelationInput, {nullable:true})
    @Type(() => InstitutionOrderByWithRelationInput)
    institution?: InstitutionOrderByWithRelationInput;
}
