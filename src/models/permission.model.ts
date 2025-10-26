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

  @Field(() => Boolean, { nullable: true })
  is_essential?: boolean;

  // Indica se a permissão está selecionada para a role consultada
  @Field(() => Boolean, { nullable: true })
  is_selected?: boolean;
}
