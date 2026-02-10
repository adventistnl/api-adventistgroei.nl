
import { LanguagePreference } from '../@generated/prisma/language-preference.enum';

export class RefundRequestedEmailDto {
  to: string;
  subsidyName: string;
  projectName: string;
  projectUrl: string;
  refundAmount: number;
  requesterName: string;
  reason: string;
  language: LanguagePreference;
}
