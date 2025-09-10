import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumProjectType } from './enum-project-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEnumProjectTypeFilter } from './nested-enum-enum-project-type-filter.input';

@InputType()
export class NestedEnumEnumProjectTypeWithAggregatesFilter {

    @Field(() => EnumProjectType, {nullable:true})
    equals?: `${EnumProjectType}`;

    @Field(() => [EnumProjectType], {nullable:true})
    in?: Array<`${EnumProjectType}`>;

    @Field(() => [EnumProjectType], {nullable:true})
    notIn?: Array<`${EnumProjectType}`>;

    @Field(() => NestedEnumEnumProjectTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEnumProjectTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEnumProjectTypeFilter, {nullable:true})
    _min?: NestedEnumEnumProjectTypeFilter;

    @Field(() => NestedEnumEnumProjectTypeFilter, {nullable:true})
    _max?: NestedEnumEnumProjectTypeFilter;
}
