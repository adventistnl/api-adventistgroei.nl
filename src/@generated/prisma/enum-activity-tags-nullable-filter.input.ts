import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityTags } from './activity-tags.enum';
import { NestedEnumActivityTagsNullableFilter } from './nested-enum-activity-tags-nullable-filter.input';

@InputType()
export class EnumActivityTagsNullableFilter {

    @Field(() => ActivityTags, {nullable:true})
    equals?: `${ActivityTags}`;

    @Field(() => [ActivityTags], {nullable:true})
    in?: Array<`${ActivityTags}`>;

    @Field(() => [ActivityTags], {nullable:true})
    notIn?: Array<`${ActivityTags}`>;

    @Field(() => NestedEnumActivityTagsNullableFilter, {nullable:true})
    not?: NestedEnumActivityTagsNullableFilter;
}
