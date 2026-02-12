import i18n from 'i18next';
import Backend from 'i18next-fs-backend';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';

void i18n
  .use(Backend)
  .init({
    fallbackLng: 'en', // Idioma padrão
    preload: Object.values(LanguagePreference), // Idiomas suportados
    ns: ['translation', 'subsidy'], // Namespaces to load
    defaultNS: 'translation',
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json', // Caminho para os arquivos de tradução
    },
    interpolation: {
      escapeValue: false, // Não escapar valores (útil para HTML)
    },
  });

export const translate = (key: string, lang: LanguagePreference, options?: Record<string, any>) => {
  return i18n.t(key, { lng: lang, ...options });
};

export const loadNamespaces = async (namespaces: string[]) => {
  await i18n.loadNamespaces(namespaces);
}

export default i18n;