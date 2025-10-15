import i18n from 'i18next';
import Backend from 'i18next-fs-backend';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';

void i18n
  .use(Backend)
  .init({
    fallbackLng: 'en', // Idioma padrão
    preload: Object.values(LanguagePreference), // Idiomas suportados
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json', // Caminho para os arquivos de tradução
    },
    interpolation: {
      escapeValue: false, // Não escapar valores (útil para HTML)
    },
  });

export const translate = (key: string, lang: LanguagePreference, options?: Record<string, any>) => {
  // console.log('Loaded translations for emails:', i18n.services.resourceStore.data['en']['emails']);
  return i18n.t(key, { lng: lang, ...options });
};

export const loadNamespaces = async (namespaces: string[]) => {
  await i18n.loadNamespaces(namespaces);
  console.log('Namespaces loaded:', i18n.services.resourceStore.data);
}

export default i18n;