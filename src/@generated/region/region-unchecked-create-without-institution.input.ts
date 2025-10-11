import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionUncheckedCreateNestedManyWithoutParent_regionInput } from './region-unchecked-create-nested-many-without-parent-region.input';
import { Type } from 'class-transformer';
import { ChurchUncheckedCreateNestedManyWithoutRegionInput } from '../church/church-unchecked-create-nested-many-without-region.input';
import { AnnualBudgetUncheckedCreateNestedManyWithoutRegionInput } from '../annual-budget/annual-budget-unchecked-create-nested-many-without-region.input';

@InputType()
export class RegionUncheckedCreateWithoutInstitutionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parent_region_id?: string;

    @Field(() => String, {nullable:true})
    contact_id?: string;

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

    @Field(() => RegionUncheckedCreateNestedManyWithoutParent_regionInput, {nullable:true})
    @Type(() => RegionUncheckedCreateNestedManyWithoutParent_regionInput)
    children?: RegionUncheckedCreateNestedManyWithoutParent_regionInput;

    @Field(() => ChurchUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    @Type(() => ChurchUncheckedCreateNestedManyWithoutRegionInput)
    churches?: ChurchUncheckedCreateNestedManyWithoutRegionInput;

    @Field(() => AnnualBudgetUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    @Type(() => AnnualBudgetUncheckedCreateNestedManyWithoutRegionInput)
    annual_budgets?: AnnualBudgetUncheckedCreateNestedManyWithoutRegionInput;
}
