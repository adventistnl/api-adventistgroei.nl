import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from './language-preference.enum';

@InputType()
export class EnumLanguagePreferenceFieldUpdateOperationsInput {

    @Field(() => LanguagePreference, {nullable:true})
    set?: `${LanguagePreference}`;
}
