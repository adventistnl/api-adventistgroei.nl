import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../email.service';
import { VerificationCodeRepository } from '../../repositories/verification-code.repository';
import { UserService } from '../user.service';
import { SendCodeInput, VerifyCodeInput, ResetPasswordInput } from '../../resolvers/forgot-password/dto/forgot-password.input';
import { ForgotPasswordResponse } from '../../resolvers/forgot-password/dto/forgot-password.response';

@Injectable()
export class ForgotPasswordService {
  constructor(
    private readonly emailService: EmailService,
    private readonly verificationCodeRepository: VerificationCodeRepository,
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async sendCode(input: SendCodeInput): Promise<ForgotPasswordResponse> {
    const user = await this.userService.findByEmail(input.email);
    if (!user) {
      return { success: false, error: 'Email not found' };
    }

    // Gera código de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutos

    // Salva código no banco
    await this.verificationCodeRepository.create({
      email: input.email,
      code,
      expiresAt,
      attempts: 0,
      used: false,
      createdAt: new Date()
    });

    // Envia email
    await this.emailService.sendForgotPasswordEmail({
      to: input.email,
      code,
      expiresIn: '15 minutes',
      language: user.language_preference || 'en'
    });

    return { success: true, message: 'Verification code sent to email' };
  }

  async verifyCode(input: VerifyCodeInput): Promise<ForgotPasswordResponse> {
    const verificationRecord = await this.verificationCodeRepository.findValidCode(input.email, input.code);
    
    if (!verificationRecord) {
      return { success: false, error: 'Invalid or expired code' };
    }

    // Verifica se o código expirou
    if (new Date() > verificationRecord.expiresAt) {
      return { success: false, error: 'Invalid or expired code' };
    }

    // Verifica limite de tentativas (máximo 5)
    if (verificationRecord.attempts >= 5) {
      return { success: false, error: 'Too many attempts. Please request a new code.' };
    }

    // Gera reset token JWT com expiração de 1 hora
    const resetToken = this.jwtService.sign(
      { email: input.email, codeId: verificationRecord.id },
      { expiresIn: '1h' }
    );

    return { success: true, message: 'Code verified', resetToken };
  }

  async resetPassword(input: ResetPasswordInput): Promise<ForgotPasswordResponse> {
    // Validar força da senha (mínimo 8 caracteres)
    if (!input.newPassword || input.newPassword.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters long' };
    }

    // Validar reset token
    let tokenPayload: any;
    try {
      tokenPayload = this.jwtService.verify(input.resetToken);
    } catch (_error) {
      return { success: false, error: 'Invalid or expired reset token' };
    }

    // Verificar se email no token corresponde ao email da requisição
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (tokenPayload?.email !== input.email) {
      return { success: false, error: 'Invalid reset token' };
    }

    // Validar código e marcar como usado
    const verificationRecord = await this.verificationCodeRepository.findValidCode(input.email, input.code);
    if (!verificationRecord) {
      return { success: false, error: 'Invalid or expired code' };
    }

    // Verificar se o código ainda está válido
    if (new Date() > verificationRecord.expiresAt) {
      return { success: false, error: 'Invalid or expired code' };
    }

    try {
      // Buscar usuário por email
      const user = await this.userService.findByEmail(input.email);
      if (!user) {
        return { success: false, error: 'User not found' };
      }

      // Atualizar senha do usuário (usando user.id como updaterId pois é o próprio usuário)
      await this.userService.updatePassword(user.id, input.newPassword, user.id);

      // Marcar código como usado
      await this.verificationCodeRepository.markUsed(verificationRecord.id);

      // Limpar todos os códigos de verificação para este email
      await this.verificationCodeRepository.deleteByEmail(input.email);

      return { success: true, message: 'Password reset successfully' };
    } catch (_error) {
      console.error('Error resetting password:', _error);
      return { success: false, error: 'Failed to reset password' };
    }
  }
}
