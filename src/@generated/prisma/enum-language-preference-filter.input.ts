import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from './language-preference.enum';
import { NestedEnumLanguagePreferenceFilter } from './nested-enum-language-preference-filter.input';

@InputType()
export class EnumLanguagePreferenceFilter {

    @Field(() => LanguagePreference, {nullable:true})
    equals?: `${LanguagePreference}`;

    @Field(() => [LanguagePreference], {nullable:true})
    in?: Array<`${LanguagePreference}`>;

    @Field(() => [LanguagePreference], {nullable:true})
    notIn?: Array<`${LanguagePreference}`>;

    @Field(() => NestedEnumLanguagePreferenceFilter, {nullable:true})
    not?: NestedEnumLanguagePreferenceFilter;
}
