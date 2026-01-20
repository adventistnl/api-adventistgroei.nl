import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

@InputType()
export class UploadActivityDocumentDto {
  @Field()
  @IsString()
  activity_id: string;

  @Field()
  @IsString()
  project_activity_id: string;

  @Field()
  @IsString()
  type: string; // 'image' | 'pdf'
}

@InputType()
export class UpdateActivityDocumentDto {
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

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  is_validated?: boolean;
}

@InputType()
export class ValidateDocumentDto {
  @Field()
  @IsString()
  id: string;
}
