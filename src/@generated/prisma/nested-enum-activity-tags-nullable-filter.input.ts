import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityTags } from './activity-tags.enum';

@InputType()
export class NestedEnumActivityTagsNullableFilter {

    @Field(() => ActivityTags, {nullable:true})
    equals?: `${ActivityTags}`;

    @Field(() => [ActivityTags], {nullable:true})
    in?: Array<`${ActivityTags}`>;

    @Field(() => [ActivityTags], {nullable:true})
    notIn?: Array<`${ActivityTags}`>;

    @Field(() => NestedEnumActivityTagsNullableFilter, {nullable:true})
    not?: NestedEnumActivityTagsNullableFilter;
}
