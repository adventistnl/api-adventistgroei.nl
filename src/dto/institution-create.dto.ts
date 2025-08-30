import { InputType, Field } from '@nestjs/graphql';
import { LanguagePreference } from '@prisma/client';

@InputType()
export class InstitutionCreateDto {
  @Field()
  name: string;

  @Field()
  denomination: string;

  @Field(() => LanguagePreference)
  language_preference: LanguagePreference;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  full_address: string;

  @Field({ nullable: true })
  country: string;
}
