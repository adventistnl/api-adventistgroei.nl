import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EntityType } from './entity-type.enum';
import { NestedEnumEntityTypeWithAggregatesFilter } from './nested-enum-entity-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEntityTypeFilter } from './nested-enum-entity-type-filter.input';

@InputType()
export class EnumEntityTypeWithAggregatesFilter {

    @Field(() => EntityType, {nullable:true})
    equals?: `${EntityType}`;

    @Field(() => [EntityType], {nullable:true})
    in?: Array<`${EntityType}`>;

    @Field(() => [EntityType], {nullable:true})
    notIn?: Array<`${EntityType}`>;

    @Field(() => NestedEnumEntityTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEntityTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEntityTypeFilter, {nullable:true})
    _min?: NestedEnumEntityTypeFilter;

    @Field(() => NestedEnumEntityTypeFilter, {nullable:true})
    _max?: NestedEnumEntityTypeFilter;
}
