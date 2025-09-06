import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class SettingCreateDto {
  @Field()
  @IsString()
  institution_id: string;

  @Field()
  @IsString()
  key: string;

  @Field()
  @IsString()
  value: string;

  @Field()
  @IsString()
  description: string;
}

@InputType()
export class SettingUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  institution_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  key?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  value?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;
}
