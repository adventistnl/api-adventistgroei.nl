import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class EmailVerificationResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  error?: string;
}
