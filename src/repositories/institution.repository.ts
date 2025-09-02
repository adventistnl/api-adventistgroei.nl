import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import {
  InstitutionCreateDto,
  InstitutionUpdateDto,
} from '../dto/institution.dto';
import { Institution } from '@prisma/client';

@Injectable()
export class InstitutionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: InstitutionCreateDto,
    userId: string,
  ): Promise<Institution> {
    const contact = await this.prisma.contact.create({
      data: {
        email: data.email,
        country: data.country,
        full_address: data.full_address,
        is_primary: true,
        created_by: userId,
        updated_by: userId,
      },
    });
    return await this.prisma.institution.create({
      data: {
        name: data.name,
        denomination: data.denomination,
        language_preference: data.language_preference,
        contact_id: contact.id,
        created_by: userId,
        updated_by: userId,
        is_deleted: false,
      },
    });
  }

  async update(
    data: InstitutionUpdateDto,
    userId: string,
  ): Promise<Institution> {
    // Atualiza dados básicos e o contato, se enviado
    const institution = await this.prisma.institution.findUnique({
      where: { id: data.id },
    });
    if (!institution) throw new Error('Institution not found');
    let contactId = institution.contact_id;
    if (data.email || data.country || data.full_address) {
      if (contactId) {
        await this.prisma.contact.update({
          where: { id: contactId },
          data: {
            email: data.email,
            country: data.country,
            full_address: data.full_address,
            updated_by: userId,
          },
        });
      } else {
        const contact = await this.prisma.contact.create({
          data: {
            email: data.email,
            country: data.country,
            full_address: data.full_address,
            is_primary: true,
            created_by: userId,
            updated_by: userId,
          },
        });
        contactId = contact.id;
      }
    }
    return await this.prisma.institution.update({
      where: { id: data.id },
      data: {
        name: data.name,
        denomination: data.denomination,
        language_preference: data.language_preference,
        contact_id: contactId,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Institution> {
    return await this.prisma.institution.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findAll(): Promise<Institution[]> {
    return await this.prisma.institution.findMany();
  }

  async findById(id: string): Promise<Institution | null> {
    return await this.prisma.institution.findUnique({ where: { id } });
  }
}
