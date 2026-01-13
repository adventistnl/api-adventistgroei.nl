import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsEnum, IsNumber, IsDateString, IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { LanguagePreference } from '../@generated/prisma/language-preference.enum';
import { ProjectType } from '../@generated/prisma/project-type.enum';
import { ProjectStatus } from '../@generated/prisma/project-status.enum';
import { EventType } from '../@generated/prisma/event-type.enum';
import { ProjectActivityUpdateDto, ProjectActivityCreateWithoutProjectDto } from './project-activity.dto';

@InputType()
export class EventCreateDto {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  description: string;

  @Field(() => EventType)
  @IsEnum(EventType)
  type: EventType;

  @Field()
  @IsNumber()
  max_participants: number;

  @Field()
  @IsNumber()
  ticket_amount: number;

  @Field()
  @IsString()
  location: string;

  @Field()
  @IsDateString()
  subscription_expires_at: string;
}

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

  @Field({ defaultValue: 0 })
  @IsOptional()
  @IsNumber()
  subsidized_budget?: number;

  @Field({ defaultValue: 0 })
  @IsOptional()
  @IsNumber()
  balance?: number;

  @Field(() => ProjectType)
  @IsEnum(ProjectType)
  type: ProjectType;

  @Field()
  @IsString()
  department_id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  institution_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  owner_id?: string;

  @Field()
  @IsDateString()
  start_at: string;

  @Field()
  @IsDateString()
  end_at: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  deadline?: string;

  @Field({ defaultValue: false })
  is_private: boolean;

  @Field({ defaultValue: false })
  required_volunteers: boolean;

  @Field({ defaultValue: false })
  @IsBoolean()
  is_event: boolean;

  @Field(() => EventCreateDto, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => EventCreateDto)
  event?: EventCreateDto;

  @Field(() => [ProjectActivityCreateWithoutProjectDto], { nullable: true })
  @IsOptional()
  activities?: ProjectActivityCreateWithoutProjectDto[];

  @Field({ defaultValue: false })
  @IsOptional()
  @IsBoolean()
  is_special_case?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  special_case_reason?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  location_church_plant?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  special_budget?: number;
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
  @IsNumber()
  subsidized_budget?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  balance?: number;

  @Field(() => ProjectType, { nullable: true })
  @IsOptional()
  @IsEnum(ProjectType)
  type?: ProjectType;

  @Field(() => ProjectStatus, { nullable: true })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

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
  church_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  owner_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  start_at?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  end_at?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  deadline?: string;

  @Field({ nullable: true })
  @IsOptional()
  is_private?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  required_volunteers?: boolean;

  @Field(() => [ProjectActivityUpdateDto], { nullable: true })
  @IsOptional()
  activities?: ProjectActivityUpdateDto[];

}
