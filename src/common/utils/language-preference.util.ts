import { LanguagePreference } from '../../@generated/prisma/language-preference.enum';

/**
 * Valida e converte o valor recebido para o enum LanguagePreference.
 * Lança erro se o valor for inválido.
 * @param value Valor recebido (string ou enum)
 * @returns Valor convertido do enum LanguagePreference
 */
export function validateAndConvertLanguagePreference(value?: string): LanguagePreference {
  if (!Object.values(LanguagePreference).includes(value as LanguagePreference)) {
    throw new Error('Invalid language preference');
  }
  // Se já for enum, retorna direto
  if (typeof value === 'string' && LanguagePreference[value as keyof typeof LanguagePreference]) {
    return LanguagePreference[value as keyof typeof LanguagePreference];
  }
  return value as LanguagePreference;
}
