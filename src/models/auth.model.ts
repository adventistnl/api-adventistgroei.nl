import { ObjectType, Field } from '@nestjs/graphql';
import { UserWithRoles } from './user.model';

@ObjectType()
export class AuthModel {
  @Field()
  accessToken: string;

  @Field()
  expiresIn: number;

  @Field(() => UserWithRoles)
  user: UserWithRoles
}
