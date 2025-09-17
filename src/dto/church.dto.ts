import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { ContactCreateDto } from './contact.dto';

@InputType()
export class ChurchCreateDto {
  @Field()
  @IsString()
  institution_id: string;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  region_id: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  contact?: ContactCreateDto;
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
}
