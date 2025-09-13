import { InputType, Field, PartialType } from '@nestjs/graphql';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';
import { ContactCreateDto } from './contact.dto';

@InputType()
export class UserCreateDto {
  @Field()
  name: string;

  @Field()
  email: string;
  
  @Field()
  password: string;
  
  @Field(() => LanguagePreference)
  language_preference: LanguagePreference;

  @Field()
  institution_id: string;

  @Field()
  church_id: string;

  @Field()
  department_id: string;

  @Field(() => ContactCreateDto, { nullable: true })
  contact?: ContactCreateDto;
}

@InputType()
export class UserUpdateDto extends PartialType(UserCreateDto) {
  @Field()
  id: string;

  @Field({ nullable: true })
  contact_id?: string;
}
