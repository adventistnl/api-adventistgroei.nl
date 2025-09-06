import { Injectable } from '@nestjs/common';
import { ContactRepository } from '../repositories/contact.repository';
import { ContactCreateDto, ContactUpdateDto } from '../dto/contact.dto';
import { Contact } from '@prisma/client';

@Injectable()
export class ContactService {
  constructor(private readonly contactRepository: ContactRepository) {}

  async createContact(data: ContactCreateDto, userId: string): Promise<Contact> {
    return this.contactRepository.create(data, userId);
  }

  async updateContact(data: ContactUpdateDto): Promise<Contact> {
    return this.contactRepository.update(data);
  }

  async deleteContact(id: string, userId: string): Promise<Contact> {
    return this.contactRepository.softDelete(id, userId);
  }

  async getContactById(id: string): Promise<Contact | null> {
    return this.contactRepository.findById(id);
  }

  async getAllContacts(): Promise<Contact[]> {
    return this.contactRepository.findAll();
  }
}
