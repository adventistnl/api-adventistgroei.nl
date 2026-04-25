import { LanguagePreference } from '../@generated/prisma/language-preference.enum';

export class SubsidyStatusChangedEmailDto {
  to: string;
  recipientName: string;
  subsidyDescription: string;
  projectName: string;
  projectUrl: string;
  newStatus: string;
  language?: LanguagePreference;
}
