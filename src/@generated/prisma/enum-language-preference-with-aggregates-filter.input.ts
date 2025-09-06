import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from './language-preference.enum';
import { NestedEnumLanguagePreferenceWithAggregatesFilter } from './nested-enum-language-preference-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumLanguagePreferenceFilter } from './nested-enum-language-preference-filter.input';

@InputType()
export class EnumLanguagePreferenceWithAggregatesFilter {

    @Field(() => LanguagePreference, {nullable:true})
    equals?: `${LanguagePreference}`;

    @Field(() => [LanguagePreference], {nullable:true})
    in?: Array<`${LanguagePreference}`>;

    @Field(() => [LanguagePreference], {nullable:true})
    notIn?: Array<`${LanguagePreference}`>;

    @Field(() => NestedEnumLanguagePreferenceWithAggregatesFilter, {nullable:true})
    not?: NestedEnumLanguagePreferenceWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumLanguagePreferenceFilter, {nullable:true})
    _min?: NestedEnumLanguagePreferenceFilter;

    @Field(() => NestedEnumLanguagePreferenceFilter, {nullable:true})
    _max?: NestedEnumLanguagePreferenceFilter;
}
