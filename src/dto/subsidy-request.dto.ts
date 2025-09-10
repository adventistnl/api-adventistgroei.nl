import { InputType, Field, Float } from '@nestjs/graphql';
import { IsOptional, IsString, IsNumber } from 'class-validator';

@InputType()
@InputType()
export class SubsidyActivityInput {
  @Field()
  @IsString()
  name: string;

  @Field(() => Float)
  @IsNumber()
  budget_amount: number;

  @Field({ nullable: true })
  @IsString()
  description: string;
}

@InputType()
export class SubsidyRequestCreateDto {
  @Field()
  @IsString()
  description: string;

  @Field(() => Float)
  @IsNumber()
  total_budget: number;
  
  @Field({ nullable: true })
  @IsString()
  institution_id?: string;

  @Field()
  @IsString()
  requester_id: string;
  
  @Field()
  @IsString()
  department_id: string;

  @Field()
  @IsString()
  church_id: string;

  @Field()
  @IsString() 
  subsidy_status_id: string;

  @Field(() => [SubsidyActivityInput])
  subsidy_activities: SubsidyActivityInput[];
}
@InputType()
export class SubsidyRequestUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  total_budget?: number;

  // @Field({ nullable: true })
  // @IsOptional()
  // @IsString()
  // project_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  institution_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  requester_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  department_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  subsidy_status_id?: string;
}

