import { InputType, Field, Float } from '@nestjs/graphql';
import { IsOptional, IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SubsidyRequestItemInput } from './subsidy-request-item.dto';
import { SubsidyRequestPriority } from 'src/@generated/prisma/subsidy-request-priority.enum';

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

  @Field(() => [SubsidyRequestItemInput])
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubsidyRequestItemInput)
  items: SubsidyRequestItemInput[];

  @Field()
  @IsString()
  project_id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  notes?: string;

  @Field({ nullable: true })
  @IsOptional()
  is_for_advance?: boolean;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  advance_amount?: number;
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
}

