import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactService } from '../services/contact.service';
import { ContactCreateDto, ContactUpdateDto, LinkContactDto } from '../dto/contact.dto';
import { Contact } from 'src/@generated/contact/contact.model';
import { LinkContactResult } from 'src/models/contact.model';

@Resolver(() => Contact)
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Query(() => [Contact])
  async contacts(): Promise<Contact[]> {
    return this.contactService.getAllContacts();
  }

  @Query(() => Contact, { nullable: true })
  async contact(@Args('id') id: string): Promise<Contact | null> {
    return this.contactService.getContactById(id);
  }

  @Mutation(() => Contact)
  async createContact(
    @Args('data') data: ContactCreateDto,
    @Args('userId') userId: string,
  ): Promise<Contact> {
    return this.contactService.createContact(data, userId);
  }

  @Mutation(() => Contact)
  async updateContact(@Args('data') data: ContactUpdateDto): Promise<Contact> {
    return this.contactService.updateContact(data);
  }

  @Mutation(() => Contact)
  async deleteContact(@Args('id') id: string, @Args('userId') userId: string): Promise<Contact> {
    return this.contactService.deleteContact(id, userId);
  }

  @Mutation(() => LinkContactResult)
  async linkContact(@Args('data') data: LinkContactDto): Promise<LinkContactResult> {
    const result = await this.contactService.linkContact(data);
    return result;
  }
}
