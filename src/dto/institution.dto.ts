import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ContactCreateDto } from './contact.dto';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';

@InputType()
export class InstitutionCreateDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  denomination: string;

  @Field(() => LanguagePreference, { nullable: true })
  language_preference: LanguagePreference;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  contact?: ContactCreateDto;
}

@InputType()
export class InstitutionUpdateDto extends PartialType(InstitutionCreateDto) {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  denomination?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => LanguagePreference, { nullable: true })
  @IsOptional()
  language_preference?: LanguagePreference;
}
