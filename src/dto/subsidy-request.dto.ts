import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsNumber } from 'class-validator';

@InputType()
export class SubsidyRequestCreateDto {
  @Field()
  @IsString()
  description: string;

  @Field()
  @IsNumber()
  total_budget: number;

  @Field()
  @IsString()
  project_id: string;
  
  @Field({ nullable: true })
  @IsString()
  institution_id?: string;

  @Field()
  @IsString()
  requester_id: string;
  
  @Field()
  @IsString()
  department_id: string;

  @Field()
  @IsString()
  church_id: string;
}

@InputType()
export class SubsidyRequestUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  total_budget?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  project_id?: string;

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
}
