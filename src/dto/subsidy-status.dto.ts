import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class CreateSubsidyStatusDto {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  order: number;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  department_id: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  assigned_to: string;
}

@InputType()
export class UpdateSubsidyStatusDto {
  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  order?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsUUID()
  department_id?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsUUID()
  assigned_to?: string;
}
