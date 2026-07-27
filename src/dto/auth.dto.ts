import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true, description: 'Language for error messages (en | nl). Defaults to en.' })
  lang?: string;
}
