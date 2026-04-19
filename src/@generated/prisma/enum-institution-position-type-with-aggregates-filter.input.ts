import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionType } from './institution-position-type.enum';
import { NestedEnumInstitutionPositionTypeWithAggregatesFilter } from './nested-enum-institution-position-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumInstitutionPositionTypeFilter } from './nested-enum-institution-position-type-filter.input';

@InputType()
export class EnumInstitutionPositionTypeWithAggregatesFilter {

    @Field(() => InstitutionPositionType, {nullable:true})
    equals?: `${InstitutionPositionType}`;

    @Field(() => [InstitutionPositionType], {nullable:true})
    in?: Array<`${InstitutionPositionType}`>;

    @Field(() => [InstitutionPositionType], {nullable:true})
    notIn?: Array<`${InstitutionPositionType}`>;

    @Field(() => NestedEnumInstitutionPositionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumInstitutionPositionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumInstitutionPositionTypeFilter, {nullable:true})
    _min?: NestedEnumInstitutionPositionTypeFilter;

    @Field(() => NestedEnumInstitutionPositionTypeFilter, {nullable:true})
    _max?: NestedEnumInstitutionPositionTypeFilter;
}
