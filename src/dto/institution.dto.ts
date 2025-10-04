import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { ContactCreateDto, ContactUpdateDto } from './contact.dto';
import { AnnualBudgetCreateDto, AnnualBudgetUpdateDto } from './annual_budget.dto';

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

  @Field()
  @IsOptional()
  @IsString()
  language_preference: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  contact?: ContactCreateDto;

  @Field(() => AnnualBudgetCreateDto, { nullable: true })
  @IsOptional()
  annual_budget?: AnnualBudgetCreateDto;
}

@InputType()
export class InstitutionUpdateDto {
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

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  language_preference?: string;

  @Field({ nullable: true })
  @IsOptional()
  annual_budget?: AnnualBudgetUpdateDto;

  @Field(() => ContactUpdateDto, { nullable: true })
  contact?: ContactUpdateDto;
}
