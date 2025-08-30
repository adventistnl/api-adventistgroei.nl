import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { InstitutionCreateDto } from '../dto/institution-create.dto';
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

  async findAll(): Promise<Institution[]> {
    return await this.prisma.institution.findMany();
  }

  async findById(id: string): Promise<Institution | null> {
    return await this.prisma.institution.findUnique({ where: { id } });
  }
}
