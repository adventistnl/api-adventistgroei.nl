import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuthModel {
  @Field()
  accessToken: string;

  @Field()
  expiresIn: number;
}
