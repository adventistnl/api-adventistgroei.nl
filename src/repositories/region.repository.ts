import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { RegionCreateDto, RegionUpdateDto } from '../dto/region.dto';
import { Region } from '@prisma/client';

@Injectable()
export class RegionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Region[]> {
    const regions = await this.prisma.region.findMany();
    return regions.map((r) => r);
  }

  async findById(id: string): Promise<Region | null> {
    const r = await this.prisma.region.findUnique({ where: { id } });
    if (!r) return null;
    return r;
  }

  async create(data: RegionCreateDto, userId: string): Promise<Region> {
    let contactId: string | null = null;
    if (data.contact) {
      const contact = await this.prisma.contact.create({
        data: {
          ...data.contact,
          created_by: userId,
          updated_by: userId,
          is_primary: true,
        },
      });
      contactId = contact.id;
    }
    return await this.prisma.region.create({
      data: {
        institution_id: data.institution_id,
        name: data.name,
        parent_region_id: data.parent_region_id ?? null,
        contact_id: contactId,
        created_by: userId,
        updated_by: userId,
      },
    });
  }

  async update(data: RegionUpdateDto, userId: string): Promise<Region> {
    let contactId = data.contact_id ?? null;
    if (data.contact) {
      if (contactId) {
        await this.prisma.contact.update({
          where: { id: contactId },
          data: {
            ...data.contact,
            updated_by: userId,
          },
        });
      } else {
        const contact = await this.prisma.contact.create({
          data: {
            ...data.contact,
            created_by: userId,
            updated_by: userId,
            is_primary: false,
          },
        });
        contactId = contact.id;
      }
    }
    return await this.prisma.region.update({
      where: { id: data.id },
      data: {
        institution_id: data.institution_id,
        name: data.name,
        parent_region_id: data.parent_region_id ?? null,
        contact_id: contactId,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Region> {
    return await this.prisma.region.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }
}
