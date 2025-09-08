import { Injectable } from '@nestjs/common';
import { ContactRepository } from '../repositories/contact.repository';
import { ContactCreateDto, ContactUpdateDto, LinkContactDto } from '../dto/contact.dto';
import { Contact } from '@prisma/client';
import { LinkContactResult } from 'src/models/contact.model';

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

  async linkContact(data: LinkContactDto): Promise<LinkContactResult> {
    return this.contactRepository.linkContact(data);
  }
}
