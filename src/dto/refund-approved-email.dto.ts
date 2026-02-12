import { LanguagePreference } from '../@generated/prisma/language-preference.enum';

export class RefundApprovedEmailDto {
  to: string;
  subsidyName: string;
  projectName: string;
  projectUrl: string;
  refundAmount: number;
  requesterName: string;
  language: LanguagePreference;
}
