import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { LanguagePreference } from '@prisma/client';

@InputType()
export class UserCreateDto {
  @Field()
  institution_id: string;

  @Field()
  church_id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => LanguagePreference)
  language_preference: LanguagePreference;

  @Field({ nullable: true })
  contact_id?: string;
}

registerEnumType(LanguagePreference, {
  name: 'LanguagePreference',
});
