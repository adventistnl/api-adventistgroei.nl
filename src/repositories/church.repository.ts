import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ChurchCreateDto, ChurchUpdateDto } from '../dto/church.dto';
import { Church } from '@prisma/client';

@Injectable()
export class ChurchRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ChurchCreateDto, userId: string): Promise<Church> {
    let contactId: string | null = null;
    if (data.contact) {
      const contact = await this.prisma.contact.create({
        data: {
          ...data.contact,
          is_primary: true,
          created_by: userId,
          updated_by: userId,
        },
      });
      contactId = contact.id;
    }
    return await this.prisma.church.create({
      data: {
        institution_id: data.institution_id,
        name: data.name,
        region_id: data.region_id,
        contact_id: contactId,
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });
  }

  async update(data: ChurchUpdateDto, userId: string): Promise<Church> {
    const church = await this.prisma.church.findUnique({
      where: { id: data.id },
    });
    if (!church) throw new Error('Church not found');
    const contactId = church.contact_id;
    if (data.contact && contactId) {
      await this.prisma.contact.update({
        where: { id: contactId },
        data: {
          ...data.contact,
          updated_by: userId,
        },
      });
    }
    return await this.prisma.church.update({
      where: { id: data.id },
      data: {
        institution_id: data.institution_id,
        name: data.name,
        region_id: data.region_id,
        contact_id: contactId,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Church> {
    return await this.prisma.church.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findAll(): Promise<Church[]> {
    return await this.prisma.church.findMany({ where: { is_deleted: false } });
  }

  async findById(id: string): Promise<Church | null> {
    return await this.prisma.church.findUnique({
      where: { id, is_deleted: false },
    });
  }
}
