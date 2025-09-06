import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Setting } from '../@generated/setting/setting.model';
import { SettingCreateDto, SettingUpdateDto } from '../dto/setting.dto';

@Injectable()
export class SettingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: SettingCreateDto, userId: string): Promise<Setting> {
    const { institution_id, ...rest } = data;

    return this.prisma.setting.create({
      data: {
        ...rest,
        institution: { connect: { id: institution_id } },
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });
  }

  async update(id: string, data: SettingUpdateDto, userId: string): Promise<Setting> {
    return this.prisma.setting.update({
      where: { id },
      data: {
        ...data,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Setting> {
    return this.prisma.setting.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findById(id: string): Promise<Setting | null> {
    return this.prisma.setting.findUnique({
      where: { id, is_deleted: false },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof Setting, any>>): Promise<Setting[]> {
    const allowedKeys: (keyof Setting)[] = ['institution_id','institution_id', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Setting)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.setting.findMany({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findOneByFilters(filters: Partial<Record<keyof Setting, any>>): Promise<Setting | null> {
    const allowedKeys: (keyof Setting)[] = ['institution_id', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof Setting)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.setting.findFirst({
      where: {
        ...filters,
        is_deleted: false,
      },
    });
  }

  async findAll(): Promise<Setting[]> {
    return this.prisma.setting.findMany({ where: { is_deleted: false } });
  }
}
