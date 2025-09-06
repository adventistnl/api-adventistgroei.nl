import { InputType, Field } from '@nestjs/graphql';
import { EventRegistrationStatus } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class DirectMessageCreateDto {
  @Field()
  @IsString()
  content: string;

  @Field()
  @IsString()
  sender_id: string;

  @Field()
  @IsString()
  recipient_id: string;

  @Field()
  @IsString()
  institution_id: string;

  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  status: EventRegistrationStatus;
}

@InputType()
export class DirectMessageUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  content?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  recipient_id?: string;
}
