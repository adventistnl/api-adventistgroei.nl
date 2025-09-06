import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

@InputType()
export class NotificationCreateDto {
  @Field()
  @IsString()
  institution_id: string;

  @Field()
  @IsString()
  user_id: string;

  @Field()
  @IsString()
  type: string;

  @Field()
  @IsString()
  message: string;

  @Field()
  @IsBoolean()
  read_status: boolean;
}

@InputType()
export class NotificationUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  institution_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  user_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  type?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  message?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  read_status?: boolean;
}
