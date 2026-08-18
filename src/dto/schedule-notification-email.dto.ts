import { LanguagePreference } from '../@generated/prisma/language-preference.enum';

export type ScheduleNotificationEventType =
  | 'ASSIGNMENT_REQUEST_RECEIVED'
  | 'ASSIGNMENT_INVITE_RECEIVED'
  | 'ASSIGNMENT_REQUEST_ACCEPTED'
  | 'ASSIGNMENT_REQUEST_DECLINED'
  | 'MONTHLY_CLOSE_OPEN_SLOTS'
  | 'MONTHLY_CLOSE_INCOMPLETE_AVAILABILITY'
  | 'MONTHLY_CLOSE_AUTO_CONFIRMED';

export class ScheduleNotificationEmailDto {
  to: string;
  recipientName: string;
  language?: LanguagePreference;
  eventType: ScheduleNotificationEventType;
  /** Interpolation vars matching the event's `emails.json` placeholders (e.g. churchName, date, month, count). */
  vars: Record<string, string | number>;
  ctaUrl: string;
}
