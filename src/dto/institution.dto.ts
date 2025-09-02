import { InputType, Field, PartialType } from '@nestjs/graphql';
import { LanguagePreference } from '@prisma/client';
import { ContactCreateDto } from './contact.dto';

@InputType()
export class InstitutionCreateDto {
  @Field()
  name: string;

  @Field()
  denomination: string;

  @Field(() => LanguagePreference)
  language_preference: LanguagePreference;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  full_address?: string;

  @Field({ nullable: true })
  country?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  contact?: ContactCreateDto;
}

@InputType()
export class InstitutionUpdateDto extends PartialType(InstitutionCreateDto) {
  @Field()
  id: string;
}
