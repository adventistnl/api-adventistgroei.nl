import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber, ValidateNested } from 'class-validator';
import { ContactCreateDto } from './contact.dto';

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
  institution: string;

  @Field()
  @IsString()
  church: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  @ValidateNested()
  contact?: ContactCreateDto;
}

@InputType()
export class DepartmentUpdateDto {
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

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  institution_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_id?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  @ValidateNested()
  contact?: ContactCreateDto;
}
