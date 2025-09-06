import { registerEnumType } from '@nestjs/graphql';

export enum LanguagePreference {
    en = "en",
    nl = "nl"
}


registerEnumType(LanguagePreference, { name: 'LanguagePreference', description: undefined })
