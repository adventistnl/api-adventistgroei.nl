import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { ContactCreateDto } from './contact.dto';
import { AnnualBudgetCreateDto, AnnualBudgetUpdateDto } from './annual_budget.dto';
import { ChurchType } from 'src/@generated/prisma/church-type.enum';

@InputType()
export class ChurchCreateDto {
  @Field()
  @IsString()
  institution_id: string;

  @Field()
  @IsString()
  name: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  region_id?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  contact?: ContactCreateDto;
  
  @Field(() => AnnualBudgetCreateDto, { nullable: true })
  @IsOptional()
  annual_budget?: AnnualBudgetCreateDto;

  @Field(() => ChurchType, { nullable: true })
  type?: ChurchType
}

@InputType()
export class ChurchUpdateDto {
  @Field()
  @IsString()
  @IsOptional()
  institution_id?: string;

  @Field()
  @IsString()
  @IsOptional()
  name?: string;

  @Field()
  @IsString()
  @IsOptional()
  region_id?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  contact?: ContactCreateDto;
  @Field(() => AnnualBudgetUpdateDto, { nullable: true })
  @IsOptional()
  annual_budget?: AnnualBudgetUpdateDto;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  users?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  departmens?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  subsidy_requests?: string[]; 
  
  @Field(() => ChurchType, { nullable: true })
  type?: ChurchType
}
