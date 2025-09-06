import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from './language-preference.enum';

@InputType()
export class NestedEnumLanguagePreferenceFilter {

    @Field(() => LanguagePreference, {nullable:true})
    equals?: `${LanguagePreference}`;

    @Field(() => [LanguagePreference], {nullable:true})
    in?: Array<`${LanguagePreference}`>;

    @Field(() => [LanguagePreference], {nullable:true})
    notIn?: Array<`${LanguagePreference}`>;

    @Field(() => NestedEnumLanguagePreferenceFilter, {nullable:true})
    not?: NestedEnumLanguagePreferenceFilter;
}
