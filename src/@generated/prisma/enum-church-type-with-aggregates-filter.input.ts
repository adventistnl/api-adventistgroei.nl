import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchType } from './church-type.enum';
import { NestedEnumChurchTypeWithAggregatesFilter } from './nested-enum-church-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumChurchTypeFilter } from './nested-enum-church-type-filter.input';

@InputType()
export class EnumChurchTypeWithAggregatesFilter {

    @Field(() => ChurchType, {nullable:true})
    equals?: `${ChurchType}`;

    @Field(() => [ChurchType], {nullable:true})
    in?: Array<`${ChurchType}`>;

    @Field(() => [ChurchType], {nullable:true})
    notIn?: Array<`${ChurchType}`>;

    @Field(() => NestedEnumChurchTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumChurchTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumChurchTypeFilter, {nullable:true})
    _min?: NestedEnumChurchTypeFilter;

    @Field(() => NestedEnumChurchTypeFilter, {nullable:true})
    _max?: NestedEnumChurchTypeFilter;
}
