import { Injectable } from '@nestjs/common';
import { EmailService } from './email.service';
import { VerificationCodeRepository } from '../repositories/verification-code.repository';

export interface SendEmailVerificationCodeInput {
  email: string;
  userName?: string;
  language?: string;
}

export interface VerifyEmailCodeInput {
  email: string;
  code: string;
}

export interface EmailVerificationResponse {
  success: boolean;
  message?: string;
  error?: string;
}

@Injectable()
export class EmailVerificationService {
  constructor(
    private readonly emailService: EmailService,
    private readonly verificationCodeRepository: VerificationCodeRepository,
  ) {}

  async sendCode(input: SendEmailVerificationCodeInput): Promise<EmailVerificationResponse> {
    const { email, userName, language = 'en' } = input;

    // Rate-limit: check if there is already a valid (non-expired, non-used) code
    // created within the last 60 seconds. This prevents double-clicks from
    // generating multiple orphan codes that would all remain valid.
    const existingCode = await this.verificationCodeRepository.findByEmail(email);
    if (existingCode) {
      const secondsSinceCreation = (Date.now() - existingCode.createdAt.getTime()) / 1000;
      if (secondsSinceCreation < 60) {
        // A code was sent very recently — reject silently (frontend shows countdown)
        return {
          success: false,
          error: 'A verification code was recently sent. Please wait before requesting a new one.',
        };
      }
    }

    // Safe to remove old codes and issue a new one
    await this.verificationCodeRepository.deleteByEmail(email);

    // Generate a 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    // Persist the code
    await this.verificationCodeRepository.create({
      email,
      code,
      expiresAt,
      attempts: 0,
      used: false,
      createdAt: new Date(),
    });

    // Send the verification email
    await this.emailService.sendEmailVerificationCode({
      to: email,
      code,
      expiresIn: '15 minutes',
      language,
      userName,
    });

    return { success: true, message: 'Verification code sent to email' };
  }

  async verifyCode(input: VerifyEmailCodeInput): Promise<EmailVerificationResponse> {
    const { email, code } = input;

    const verificationRecord = await this.verificationCodeRepository.findValidCode(email, code);

    if (!verificationRecord) {
      return { success: false, error: 'Invalid or expired code' };
    }

    // Check expiry
    if (new Date() > verificationRecord.expiresAt) {
      return { success: false, error: 'Invalid or expired code' };
    }

    // Check attempt limit (max 5)
    if (verificationRecord.attempts >= 5) {
      return { success: false, error: 'Too many attempts. Please request a new code.' };
    }

    // Increment attempts on each verify call (even successful ones)
    await this.verificationCodeRepository.incrementAttempts(verificationRecord.id);

    // Mark as used
    await this.verificationCodeRepository.markUsed(verificationRecord.id);

    return { success: true, message: 'Email verified successfully' };
  }
}
