import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength, Matches } from 'class-validator';

@InputType()
export class SendEmailVerificationCodeInput {
  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  language?: string;
}

@InputType()
export class VerifyEmailCodeInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @MinLength(6)
  @Matches(/^\d{6}$/, { message: 'Code must be 6 digits' })
  code: string;
}
