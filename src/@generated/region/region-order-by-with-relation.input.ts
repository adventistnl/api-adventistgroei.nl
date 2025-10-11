import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { RegionOrderByRelationAggregateInput } from './region-order-by-relation-aggregate.input';
import { ContactOrderByWithRelationInput } from '../contact/contact-order-by-with-relation.input';
import { ChurchOrderByRelationAggregateInput } from '../church/church-order-by-relation-aggregate.input';
import { AnnualBudgetOrderByRelationAggregateInput } from '../annual-budget/annual-budget-order-by-relation-aggregate.input';

@InputType()
export class RegionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    institution_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    parent_region_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contact_id?: SortOrderInput;

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
    institution?: InstitutionOrderByWithRelationInput;

    @Field(() => RegionOrderByWithRelationInput, {nullable:true})
    @Type(() => RegionOrderByWithRelationInput)
    parent_region?: RegionOrderByWithRelationInput;

    @Field(() => RegionOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RegionOrderByRelationAggregateInput)
    children?: RegionOrderByRelationAggregateInput;

    @Field(() => ContactOrderByWithRelationInput, {nullable:true})
    @Type(() => ContactOrderByWithRelationInput)
    contact?: ContactOrderByWithRelationInput;

    @Field(() => ChurchOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ChurchOrderByRelationAggregateInput)
    churches?: ChurchOrderByRelationAggregateInput;

    @Field(() => AnnualBudgetOrderByRelationAggregateInput, {nullable:true})
    @Type(() => AnnualBudgetOrderByRelationAggregateInput)
    annual_budgets?: AnnualBudgetOrderByRelationAggregateInput;
}
