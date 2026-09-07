import { InputType, Field } from '@nestjs/graphql';
import { EventRegistrationStatus } from 'src/@generated/prisma/event-registration-status.enum';
import { IsOptional, IsString, IsEnum } from 'class-validator';

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

  @Field(() => EventRegistrationStatus)
  @IsEnum(EventRegistrationStatus)
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
