import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityTags } from './activity-tags.enum';
import { NestedEnumActivityTagsNullableWithAggregatesFilter } from './nested-enum-activity-tags-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumActivityTagsNullableFilter } from './nested-enum-activity-tags-nullable-filter.input';

@InputType()
export class EnumActivityTagsNullableWithAggregatesFilter {

    @Field(() => ActivityTags, {nullable:true})
    equals?: `${ActivityTags}`;

    @Field(() => [ActivityTags], {nullable:true})
    in?: Array<`${ActivityTags}`>;

    @Field(() => [ActivityTags], {nullable:true})
    notIn?: Array<`${ActivityTags}`>;

    @Field(() => NestedEnumActivityTagsNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumActivityTagsNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumActivityTagsNullableFilter, {nullable:true})
    _min?: NestedEnumActivityTagsNullableFilter;

    @Field(() => NestedEnumActivityTagsNullableFilter, {nullable:true})
    _max?: NestedEnumActivityTagsNullableFilter;
}
