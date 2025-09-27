import { InputType, Field } from '@nestjs/graphql';
import { ContactCreateDto } from './contact.dto';
import { AnnualBudgetCreateDto, AnnualBudgetUpdateDto } from './annual_budget.dto';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class RegionCreateDto {
  @Field()
  @IsString()
  institution_id: string;

  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsString()
  parent_region_id?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  contact?: ContactCreateDto;
  @Field(() => AnnualBudgetCreateDto, { nullable: true })

  @IsOptional()
  annual_budget: AnnualBudgetCreateDto;
}

@InputType()
export class RegionUpdateDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  institution_id?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  parent_region_id?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  contact?: ContactCreateDto;
  @Field(() => AnnualBudgetUpdateDto, { nullable: true })
  @IsOptional()
  annual_budget?: AnnualBudgetUpdateDto;
}
