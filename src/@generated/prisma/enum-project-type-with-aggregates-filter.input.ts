import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectType } from './project-type.enum';
import { NestedEnumProjectTypeWithAggregatesFilter } from './nested-enum-project-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProjectTypeFilter } from './nested-enum-project-type-filter.input';

@InputType()
export class EnumProjectTypeWithAggregatesFilter {

    @Field(() => ProjectType, {nullable:true})
    equals?: `${ProjectType}`;

    @Field(() => [ProjectType], {nullable:true})
    in?: Array<`${ProjectType}`>;

    @Field(() => [ProjectType], {nullable:true})
    notIn?: Array<`${ProjectType}`>;

    @Field(() => NestedEnumProjectTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProjectTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProjectTypeFilter, {nullable:true})
    _min?: NestedEnumProjectTypeFilter;

    @Field(() => NestedEnumProjectTypeFilter, {nullable:true})
    _max?: NestedEnumProjectTypeFilter;
}
