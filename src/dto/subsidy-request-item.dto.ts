import { InputType, Field, Float } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

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

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  linked_activity_document_ids?: string[];

  @Field(() => [Float], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  linked_document_amounts?: number[];

}
