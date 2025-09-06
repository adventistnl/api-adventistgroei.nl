import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class DepartmentCreateDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsNumber()
  annual_budget: number;

  @Field()
  @IsString()
  created_by: string;

  @Field()
  @IsString()
  updated_by: string;

  @Field()
  @IsString()
  institution: string;

  @Field()
  @IsString()
  church: string;
}

@InputType()
export class DepartmentUpdateDto {
  @Field()
  @IsString()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  annual_budget?: number;
}
