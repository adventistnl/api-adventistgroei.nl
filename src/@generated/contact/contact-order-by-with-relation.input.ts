import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { RegionOrderByRelationAggregateInput } from '../region/region-order-by-relation-aggregate.input';
import { ChurchOrderByRelationAggregateInput } from '../church/church-order-by-relation-aggregate.input';
import { DepartmentOrderByRelationAggregateInput } from '../department/department-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';

@InputType()
export class ContactOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mobile?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    country?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    city?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    full_address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    postal_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    website?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    is_primary?: `${SortOrder}`;

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

    @Field(() => InstitutionOrderByWithRelationInput, {nullable:true})
    @Type(() => InstitutionOrderByWithRelationInput)
    Institution?: InstitutionOrderByWithRelationInput;

    @Field(() => RegionOrderByRelationAggregateInput, {nullable:true})
    Region?: RegionOrderByRelationAggregateInput;

    @Field(() => ChurchOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ChurchOrderByRelationAggregateInput)
    Church?: ChurchOrderByRelationAggregateInput;

    @Field(() => DepartmentOrderByRelationAggregateInput, {nullable:true})
    @Type(() => DepartmentOrderByRelationAggregateInput)
    Department?: DepartmentOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    @Type(() => UserOrderByRelationAggregateInput)
    User?: UserOrderByRelationAggregateInput;

    @Field(() => EventOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EventOrderByRelationAggregateInput)
    Event?: EventOrderByRelationAggregateInput;
}
