import { Injectable } from '@nestjs/common';
import { InstitutionPosition } from '@prisma/client';
import { PrismaService } from '../services/prisma.service';
import { InstitutionPositionCreateDto, InstitutionPositionUpdateDto } from '../dto/institution-position.dto';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';

@Injectable()
export class InstitutionPositionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(institution_id: string): Promise<InstitutionPosition[]> {
    return this.prisma.institutionPosition.findMany({
      where: { institution_id, is_deleted: false },
      orderBy: { position_type: 'asc' },
    });
  }

  async findById(institutionPositionId: string): Promise<InstitutionPosition> {
    const position = await this.prisma.institutionPosition.findUnique({
      where: { id: institutionPositionId },
    });
    if (!position || position.is_deleted) {
      throw new CustomGraphQLError('Institution position not found', ErrorCode.NOT_FOUND, 404);
    }
    return position;
  }

  async create(data: InstitutionPositionCreateDto, userId: string): Promise<InstitutionPosition> {
    const existing = await this.prisma.institutionPosition.findFirst({
      where: {
        institution_id: data.institution_id,
        position_type: data.position_type,
        is_deleted: false,
      },
    });
    if (existing) {
      throw new CustomGraphQLError(
        `Position ${data.position_type} already assigned in this institution`,
        ErrorCode.CONFLICT,
        409,
      );
    }
    return this.prisma.institutionPosition.create({
      data: {
        institution: { connect: { id: data.institution_id } },
        position_type: data.position_type,
        user: { connect: { id: data.user_id } },
        created_by: userId,
        updated_by: userId,
      },
    });
  }

  async update(
    institutionPositionId: string,
    data: InstitutionPositionUpdateDto,
    userId: string,
  ): Promise<InstitutionPosition> {
    await this.findById(institutionPositionId);
    return this.prisma.institutionPosition.update({
      where: { id: institutionPositionId },
      data: {
        ...(data.position_type && { position_type: data.position_type }),
        ...(data.user_id && { user: { connect: { id: data.user_id } } }),
        updated_by: userId,
      },
    });
  }

  async delete(institutionPositionId: string, userId: string): Promise<InstitutionPosition> {
    await this.findById(institutionPositionId);
    return this.prisma.institutionPosition.update({
      where: { id: institutionPositionId },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }
}
