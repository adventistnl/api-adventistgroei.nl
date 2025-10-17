import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'src/services';

@Injectable()
export class TokenCleanupService {
  constructor(private readonly prisma: PrismaService) {}

  // Define um cron job que roda diariamente à meia-noite
  @Cron('0 0 * * *') // Formato CRON: minuto, hora, dia do mês, mês, dia da semana
  async cleanupExpiredTokens() {
    const now = new Date();
    console.info(`Cleaning up tokens from: ${now.toISOString()}`);

    const deleted = await this.prisma.usedInviteTokens.deleteMany({
      where: {
        tokenExpiresAt: { lt: now }, // Tokens expirados
      },
    });

    console.info(`Expired tokens removed: ${deleted.count}`);
  }
}