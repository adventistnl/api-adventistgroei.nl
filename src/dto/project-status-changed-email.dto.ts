import { LanguagePreference } from '../@generated/prisma/language-preference.enum';

export class ProjectStatusChangedEmailDto {
  to: string;
  projectName: string;
  projectUrl: string;
  newStatus: string;
  recipientName: string;
  language?: LanguagePreference;
}
