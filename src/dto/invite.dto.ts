import { IsNotEmpty, IsString, IsOptional, IsArray } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';

@InputType()
export class InviteUserDto {
  @Field(() => [String])
  @IsNotEmpty()
  @IsArray()
  role_ids: string[];

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  institution_id: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  inviter_id: string;

  @Field(() => LanguagePreference, { nullable: true })
  @IsOptional()
  language_preference?: LanguagePreference;
}
