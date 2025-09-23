import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsEnum, IsNumber } from 'class-validator';
import { LanguagePreference } from '../@generated/prisma/language-preference.enum';
import { ProjectType } from '../@generated/prisma/project-type.enum';

@InputType()
export class ProjectCreateDto {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  description: string;

  @Field(() => LanguagePreference)
  @IsEnum(LanguagePreference)
  language_preference: LanguagePreference;

  @Field()
  @IsNumber()
  budget: number;

  @Field()
  @IsOptional()
  @IsString()
  media_link: string;

  @Field(() => ProjectType)
  @IsEnum(ProjectType)
  type: ProjectType;

  @Field()
  @IsString()
  department_id: string;

  @Field()
  @IsString()
  institution_id: string;

  @Field()
  @IsString()
  owner_id: string;
}

@InputType()
export class ProjectUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => LanguagePreference, { nullable: true })
  @IsOptional()
  @IsEnum(LanguagePreference)
  language_preference?: LanguagePreference;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  budget?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  media_link?: string;

  @Field(() => ProjectType, { nullable: true })
  @IsOptional()
  @IsEnum(ProjectType)
  type?: ProjectType;

  @Field({ nullable: true })
  @IsOptional()
  department_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  institution_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  owner_id?: string;
}
