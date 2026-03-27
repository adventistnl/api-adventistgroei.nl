import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryType } from './project-history-type.enum';
import { NestedEnumProjectHistoryTypeWithAggregatesFilter } from './nested-enum-project-history-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProjectHistoryTypeFilter } from './nested-enum-project-history-type-filter.input';

@InputType()
export class EnumProjectHistoryTypeWithAggregatesFilter {

    @Field(() => ProjectHistoryType, {nullable:true})
    equals?: `${ProjectHistoryType}`;

    @Field(() => [ProjectHistoryType], {nullable:true})
    in?: Array<`${ProjectHistoryType}`>;

    @Field(() => [ProjectHistoryType], {nullable:true})
    notIn?: Array<`${ProjectHistoryType}`>;

    @Field(() => NestedEnumProjectHistoryTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProjectHistoryTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProjectHistoryTypeFilter, {nullable:true})
    _min?: NestedEnumProjectHistoryTypeFilter;

    @Field(() => NestedEnumProjectHistoryTypeFilter, {nullable:true})
    _max?: NestedEnumProjectHistoryTypeFilter;
}
