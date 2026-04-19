import { InputType, Field, Float } from '@nestjs/graphql';
import { IsOptional, IsString, IsNumber, IsArray, ValidateNested, IsEnum, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { SubsidyRequestItemInput } from './subsidy-request-item.dto';
import { SubsidyRequestPriority } from 'src/@generated/prisma/subsidy-request-priority.enum';
import { SubsidyRequestType } from 'src/@generated/prisma/subsidy-request-type.enum';

@InputType()
export class SubsidyRequestCreateDto {
  @Field()
  @IsString()
  description: string;

  @Field(() => Float)
  @IsNumber()
  total_budget: number;

  @Field({ nullable: true })
  @IsString()
  institution_id?: string;

  @Field()
  @IsString()
  requester_id: string;

  @Field()
  @IsString()
  department_id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  subsidy_status_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  start_as_draft?: boolean;

  @Field(() => [SubsidyRequestItemInput], { nullable: true })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubsidyRequestItemInput)
  items?: SubsidyRequestItemInput[];

  @Field()
  @IsString()
  project_id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  notes?: string;

  /**
   * Tipo de subsídio:
   * - ADVANCE: adiantamento sem documentos nem items de atividade
   * - WITHOUT_DOCUMENT: vinculado a atividades, mas sem comprovante de documento
   * - WITH_DOCUMENT: vinculado a atividades com comprovante de documento (padrão)
   */
  @Field(() => SubsidyRequestType, { nullable: true, defaultValue: SubsidyRequestType.WITH_DOCUMENT })
  @IsOptional()
  @IsEnum(SubsidyRequestType)
  request_type?: SubsidyRequestType;

  /** @deprecated Use request_type = ADVANCE. Mantido para compatibilidade. */
  @Field({ nullable: true })
  @IsOptional()
  is_for_advance?: boolean;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  advance_amount?: number;
}

/**
 * DTO dedicado para criação de subsídio do tipo ADVANCE (adiantamento).
 * Não requer items de atividade nem documentos.
 */
@InputType()
export class CreateAdvanceSubsidyRequestDto {
  @Field()
  @IsString()
  project_id: string;

  @Field(() => Float)
  @IsNumber()
  advance_amount: number;
}

/**
 * DTO dedicado para criação de subsídio do tipo WITHOUT_DOCUMENT.
 * Requer items de atividade, mas não exige comprovante de documento.
 */
@InputType()
export class CreateWithoutDocumentSubsidyRequestDto {
  @Field()
  @IsString()
  description: string;

  @Field(() => Float)
  @IsNumber()
  total_budget: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  institution_id?: string;

  @Field()
  @IsString()
  requester_id: string;

  @Field()
  @IsString()
  department_id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_id?: string;

  @Field()
  @IsString()
  project_id: string;

  @Field(() => [SubsidyRequestItemInput])
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubsidyRequestItemInput)
  items: SubsidyRequestItemInput[];

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  notes?: string;
}

@InputType()
export class SubsidyRequestUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  total_budget?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  institution_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  requester_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  department_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  subsidy_status_id?: string;

  @Field(() => [SubsidyRequestItemInput], { nullable: true })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubsidyRequestItemInput)
  items?: SubsidyRequestItemInput[];

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  approved_amount?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  advance_amount?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  rejection_reason?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  notes?: string;

  @Field(() => SubsidyRequestPriority, { nullable: true })
  @IsOptional()
  priority?: SubsidyRequestPriority;

  // campos de auditoria internos (não expostos no GraphQL)
  approved_at?: Date;
  approved_by?: string;
}


