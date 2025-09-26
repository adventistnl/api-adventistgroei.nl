import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateNestedOneWithoutRegionsInput } from '../institution/institution-create-nested-one-without-regions.input';
import { Type } from 'class-transformer';
import { RegionCreateNestedOneWithoutChildrenInput } from './region-create-nested-one-without-children.input';
import { RegionCreateNestedManyWithoutParent_regionInput } from './region-create-nested-many-without-parent-region.input';
import { ContactCreateNestedOneWithoutRegionInput } from '../contact/contact-create-nested-one-without-region.input';
import { AnnualBudgetCreateNestedOneWithoutRegionsInput } from '../annual-budget/annual-budget-create-nested-one-without-regions.input';
import { ChurchCreateNestedManyWithoutRegionInput } from '../church/church-create-nested-many-without-region.input';

@InputType()
export class RegionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => InstitutionCreateNestedOneWithoutRegionsInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutRegionsInput)
    institution!: InstitutionCreateNestedOneWithoutRegionsInput;

    @Field(() => RegionCreateNestedOneWithoutChildrenInput, {nullable:true})
    @Type(() => RegionCreateNestedOneWithoutChildrenInput)
    parent_region?: RegionCreateNestedOneWithoutChildrenInput;

    @Field(() => RegionCreateNestedManyWithoutParent_regionInput, {nullable:true})
    @Type(() => RegionCreateNestedManyWithoutParent_regionInput)
    children?: RegionCreateNestedManyWithoutParent_regionInput;

    @Field(() => ContactCreateNestedOneWithoutRegionInput, {nullable:true})
    @Type(() => ContactCreateNestedOneWithoutRegionInput)
    contact?: ContactCreateNestedOneWithoutRegionInput;

    @Field(() => AnnualBudgetCreateNestedOneWithoutRegionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateNestedOneWithoutRegionsInput)
    annual_budget?: AnnualBudgetCreateNestedOneWithoutRegionsInput;

    @Field(() => ChurchCreateNestedManyWithoutRegionInput, {nullable:true})
    @Type(() => ChurchCreateNestedManyWithoutRegionInput)
    churches?: ChurchCreateNestedManyWithoutRegionInput;
}
