import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ForgotPasswordResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  error?: string;

  @Field({ nullable: true })
  resetToken?: string;
}
