import { InputType, Field, Float } from '@nestjs/graphql';
import { IsOptional, IsString, IsBoolean, IsNumber } from 'class-validator';

@InputType()
export class UploadSubsidyReceiptDto {
  @Field()
  @IsString()
  subsidy_request_id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  subsidy_request_item_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  project_activity_id?: string;

  @Field({ nullable: true, defaultValue: false })
  @IsOptional()
  @IsBoolean()
  is_refund_receipt?: boolean;

  @Field()
  @IsString()
  type: string; // 'image' | 'pdf'

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  note?: string;
}

@InputType()
export class UpdateSubsidyReceiptDto {
  @Field()
  @IsString()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  file_url?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  drive_file_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  type?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  is_validated?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  approved?: boolean;
}

@InputType()
export class ValidateSubsidyReceiptDto {
  @Field()
  @IsString()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  note?: string;
}

@InputType()
export class RejectSubsidyReceiptDto {
  @Field()
  @IsString()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  reason?: string;
}

@InputType()
export class GetSubsidyReceiptsDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  subsidy_request_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  subsidy_request_item_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  project_activity_id?: string;
}
