import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoleInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  key_code: string;

  @Field(() => [String], { nullable: true })
  permissionIds?: string[];
}

@InputType()
export class UpdateRoleInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  key_code?: string;

  @Field(() => [String], { nullable: true })
  permissionIds?: string[];
}
