import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { PrismaClient, VerificationCode, Prisma } from '@prisma/client';

@Injectable()
export class VerificationCodeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.VerificationCodeCreateInput): Promise<VerificationCode> {
    return await (this.prisma as PrismaClient).verificationCode.create({ data });
  }

  async findByEmail(email: string): Promise<VerificationCode | null> {
    return await (this.prisma as PrismaClient).verificationCode.findFirst({ where: { email, used: false } });
  }

  async findValidCode(email: string, code: string): Promise<VerificationCode | null> {
    return await (this.prisma as PrismaClient).verificationCode.findFirst({ where: { email, code, used: false } });
  }

  async markUsed(id: string): Promise<VerificationCode> {
    return await (this.prisma as PrismaClient).verificationCode.update({ where: { id }, data: { used: true } });
  }

  async incrementAttempts(id: string): Promise<VerificationCode> {
    return await (this.prisma as PrismaClient).verificationCode.update({ where: { id }, data: { attempts: { increment: 1 } } });
  }

  async deleteByEmail(email: string): Promise<void> {
    await (this.prisma as PrismaClient).verificationCode.deleteMany({ where: { email } });
  }
}
