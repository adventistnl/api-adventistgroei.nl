import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PermissionModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  key_code: string;

  @Field()
  resolver_name: string;

  @Field({ nullable: true })
  group?: string;
}
