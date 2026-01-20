import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength, Matches } from 'class-validator';

@InputType()
export class SendCodeInput {
  @Field()
  @IsEmail()
  email: string;
}

@InputType()
export class VerifyCodeInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @MinLength(6)
  @Matches(/^\d{6}$/, { message: 'Code must be 6 digits' })
  code: string;
}

@InputType()
export class ResetPasswordInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @MinLength(6)
  @Matches(/^\d{6}$/, { message: 'Code must be 6 digits' })
  code: string;

  @Field()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
    message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  })
  newPassword: string;

  @Field()
  @IsString()
  resetToken: string;
}
