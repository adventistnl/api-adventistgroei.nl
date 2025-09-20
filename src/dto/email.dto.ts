import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";


@InputType()
export class InviteEmailDto {
  @Field(() => String)
  @IsString()
  inviter_id: string;

  @Field(() => String)
  @IsString()
  to: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  message?: string;

  @Field(() => String)
  @IsString()
  url: string;
}