export interface EmailVerificationDto {
  to: string;
  code: string;
  expiresIn: string;
  language: string;
  userName?: string;
}
