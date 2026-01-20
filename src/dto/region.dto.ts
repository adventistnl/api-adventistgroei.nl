import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsObject } from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';

export interface TerritoryMap {
  [country: string]: {
    [state: string]: string[];
  };
}

@InputType()
export class RegionCreateDto {
  @Field()
  @IsString()
  name: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  @IsObject()
  territory?: TerritoryMap;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  color?: string;
}

@InputType()
export class RegionUpdateDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  @IsObject()
  territory?: TerritoryMap;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  color?: string;
}
