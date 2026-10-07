import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { CommunicationPriority, CommunicationStatus, CommunicationType } from '@prisma/client';
import { IsOptional, IsString, IsEnum, IsDate } from 'class-validator';
import { LanguagePreference } from 'src/@generated/prisma/language-preference.enum';

registerEnumType(CommunicationType, { name: 'CommunicationType' });
registerEnumType(CommunicationPriority, { name: 'CommunicationPriority' });
registerEnumType(CommunicationStatus, { name: 'CommunicationStatus' });

@InputType()
export class CommunicationCreateDto {
  @Field()
  @IsString()
  institution_id: string;

  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  content: string;

  @Field(() => CommunicationType)
  @IsEnum(CommunicationType)
  type: CommunicationType;

  @Field(() => CommunicationPriority)
  @IsEnum(CommunicationPriority)
  priority: CommunicationPriority;

  @Field(() => CommunicationStatus)
  @IsEnum(CommunicationStatus)
  status: CommunicationStatus;

  @Field(() => LanguagePreference)
  @IsEnum(LanguagePreference)
  language_preference: LanguagePreference;

  @Field()
  @IsDate()
  schedule_at: Date;

  @Field()
  @IsDate()
  published_at: Date;

  @Field()
  @IsString()
  author_id: string;
}

@InputType()
export class CommunicationUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  institution_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  content?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  type?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  priority?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  status?: string;

  @Field(() => LanguagePreference, { nullable: true })
  @IsOptional()
  @IsEnum(LanguagePreference)
  language_preference?: LanguagePreference;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  schedule_at?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  published_at?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  author_id?: string;
}
