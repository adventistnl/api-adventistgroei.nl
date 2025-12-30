import { InputType, Field, Float } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class SubsidyRequestItemInput {
  @Field()
  @IsString()
  project_activity_id: string;

  @Field(() => Float)
  @IsNumber()
  requested_amount: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  notes?: string;
}
