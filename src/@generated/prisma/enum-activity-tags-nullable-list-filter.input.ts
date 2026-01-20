import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityTags } from './activity-tags.enum';

@InputType()
export class EnumActivityTagsNullableListFilter {

    @Field(() => [ActivityTags], {nullable:true})
    equals?: Array<`${ActivityTags}`>;

    @Field(() => ActivityTags, {nullable:true})
    has?: `${ActivityTags}`;

    @Field(() => [ActivityTags], {nullable:true})
    hasEvery?: Array<`${ActivityTags}`>;

    @Field(() => [ActivityTags], {nullable:true})
    hasSome?: Array<`${ActivityTags}`>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
