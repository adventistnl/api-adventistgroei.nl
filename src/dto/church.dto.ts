import { InputType, Field, Int } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString, IsInt } from 'class-validator';
import { ContactCreateDto } from './contact.dto';
import { ChurchType } from 'src/@generated/prisma/church-type.enum';

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
  leader_id: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  contact?: ContactCreateDto;

  @Field(() => ChurchType, { nullable: true })
  type?: ChurchType

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  zip_code?: string;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  house_number?: number;
}

@InputType()
export class ChurchUpdateDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  institution_id?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  leader_id?: string;

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
  
  @Field(() => ChurchType, { nullable: true })
  type?: ChurchType

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  zip_code?: string;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  house_number?: number;
}
