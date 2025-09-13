import { InputType, Field, Float, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID, IsNumber } from 'class-validator';

@InputType()
export class CreateProjectActivityInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsNotEmpty()
  description: string;

  @Field(() => Float)
  @IsNotEmpty()
  budget_amount: number;

  @Field(() => String)
  @IsNotEmpty()
  project_id: string;
}

@InputType()
export class UpdateProjectActivityInput {
  @Field(() => ID)
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

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  budget_amount?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsUUID()
  project_id?: string;
}
