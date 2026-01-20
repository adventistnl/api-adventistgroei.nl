import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class ForgotPasswordEmailDto {
  @Field(() => String)
  @IsString()
  to: string;

  @Field(() => String)
  @IsString()
  code: string;

  @Field(() => String)
  @IsString()
  expiresIn: string;

  @Field(() => String, { nullable: true })
  @IsString()
  language?: string;
}
